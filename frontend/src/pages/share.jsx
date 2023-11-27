import {useEffect, useMemo, useState} from "react";
import Axios from "axios";
import DataTable from "../components/datatable.jsx";
import {backPort} from "../../../backend/ports.js";

export default function Share() {
    const getMusicListAPI = `http://localhost:${backPort}/api/getPlaylist`
    const getPlaylistAPI = `http://localhost:${backPort}/api/editPlaylist/`
    let requestBody = {};
    const [data,setData] = useState([]);
    const [fetchList, setFetchList] = useState(false);
    let handleEditP = (id,pCheck) => {
        let editPlaylistBody = {
            id: id,
            playlist: pCheck
        }
        Axios.patch(getPlaylistAPI,editPlaylistBody)
            .then(() =>{ })
            .catch(()=>{
                console.log("Error");
            })

    }

    const columns = useMemo(
        () => [
            {
                Header: 'Song name',
                accessor: 'songName'
            },
            {
                Header: 'Artist',
                accessor: 'artistName'
            },
            {
                Header: 'Length',
                accessor: 'length'
            },
            {
                Header: 'Date Published',
                accessor: 'createdDate'
            },
            {
                Header: 'Genre',
                accessor: 'genre'
            },
            {
                Header: 'Album',
                accessor: 'album'
            },
            {
                accessor:'request',
                Cell: ({row}) =>
                    (
                        <button onClick={(e) => {
                            e.preventDefault();
                            handleEditP(row.original.song_id,row.original.added_to_playlist.toUpperCase())
                            setFetchList(!fetchList)
                        }}>
                            Remove
                        </button>),
            },
        ],
        []
    );
    // Get API request using axios
    // Data received must be json format

    useEffect( () => {
        Axios.get(getMusicListAPI, requestBody).then((response) => {
            setFetchList(false);
            console.log(response.data);
            setData(response.data);
        })
    }, [fetchList]);
    return (
        <>
        <h1>Share</h1>
        <div className="card">
            {
                data.length === 0 ?
                    <div>Playlist is empty</div>
                :

                    <DataTable data={data} columns={columns}/>
            }
        </div>
        </>
    )
}
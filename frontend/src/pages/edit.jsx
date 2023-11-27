import {useEffect, useMemo, useState} from "react";
import Axios from "axios";
import {backPort} from "../../../backend/ports.js";
import DataTable from "../components/datatable.jsx";

export default function Edit() {
    const getMusicListAPI = `http://localhost:${backPort}/api/musicList`
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
                accessor: 'added_to_playlist',
                Cell: ({row}) =>
                    (
                        <div>
                            {row.original.added_to_playlist == "FALSE" ? "Not in Playlist" : "In Playlist"}
                        </div>),
            },
            {
                accessor:'request',
                Cell: ({row}) =>
                    (
                        <>
                            <button onClick={(e) => {
                                e.preventDefault();
                                handleEditP(row.original.song_id,row.original.added_to_playlist.toUpperCase())
                                setFetchList(!fetchList)
                                console.log(row.original.added_to_playlist);
                            }}>
                                {row.original.added_to_playlist == "FALSE" ? "Add ": "Remove"}
                            </button>
                        </>
                    ),
            },
        ],
        []
    );

    useEffect( () => {
        Axios.get(getMusicListAPI, requestBody).then((response) => {
            setFetchList(false);
            console.log(response.data);
            setData(response.data);
        })
    }, [fetchList]);

    return (
        <>
        <h1>Edit</h1>
        <div className="card">
            <DataTable data={data} columns={columns}/>

        </div>
        </>
    )
}
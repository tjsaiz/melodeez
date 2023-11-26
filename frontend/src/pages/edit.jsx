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
                            {row.original.added_to_playlist ? "Not in Playlist" : "In Playlist"}
                        </div>),
            },
            {
                accessor:'request',
                Cell: ({row}) =>
                    (
                        <>
                        {row.original.added_to_playlist ?
                                <>
                                    <button onClick={(e) => {
                                    e.preventDefault();
                                    //handleAddToP(row.original.song_id)
                                    setFetchList(!fetchList)
                                    }}>
                                        Add
                                    </button>
                                </>
                                :
                                <>
                                    <button onClick={(e) => {
                                    e.preventDefault();
                                    //handleRemoveFromP(row.original.song_id)
                                    setFetchList(!fetchList)
                                    }}>
                                        Remove
                                    </button>
                                </>
                        }
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
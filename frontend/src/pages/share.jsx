import {useEffect, useMemo, useState} from "react";
import Axios from "axios";
import DataTable from "../components/datatable.jsx";
import {backPort} from "../../../backend/ports.js";

export default function Share() {
    const getMusicListAPI = `http://localhost:${backPort}/api/getPlaylist`
    let requestBody = {};
    const [data,setData] = useState([]);

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
        ],
        []
    );
    // Get API request using axios
    // Data received must be json format

    useEffect( () => {
        Axios.get(getMusicListAPI, requestBody).then((response) => {
            setData(response.data);
        })
    }, []);
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
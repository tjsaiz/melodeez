import DataTable from "../components/datatable.jsx";
import {useMemo, useState,useEffect} from "react";
//import Axios from "axios";
export default function Admin() {
    // const port = require('./ports');
    // const API = `localhost:${port} `

    const API = `localhost:8000/musicList`

    //Example data format:
    const test = [
        { song: "Super Shy", artist: "NewJeans", length: "2:34", date: "7/7/2023", genre: "K-Pop", album: "Get Up"},
        { name: "Megan Celica", song: "Biology", artist: 4},
        { name: "Bob Celica", song: "English", artist: 5}
    ];


    // Get API request using axios
    // Data received must be json format
    // let requestBody = {};
    // const [data,setData] = useState([]);
    // useEffect(() =>  {
    //     (async () => {
    //         Axios.post(URL,requestBody).then((response) => {
    //             setData(response.data);
    //         });
    //     })();
    // }, []);

    //Create columns and display
    //Header = Display header name of column
    //Accessor = the column name in the database
    const columns = useMemo(
        () => [
            {
                Header: 'Song',
                accessor: 'song',
            },
            {
                Header: 'Artist',
                accessor: 'artist'
            },
            {
                Header: 'Length',
                accessor: 'length'
            },
            {
                Header: 'Release Date',
                accessor: 'date'
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
                        }}>
                            Remove
                        </button>),
            },
        ],
        []
    );

    //Create datatable using <Datatable data={data goes here} columns={columns} />
    return (
        <>
            <div>
                <DataTable id='table' data={test} columns={columns}/>
            </div>
        </>
    )
}
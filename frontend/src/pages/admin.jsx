import DataTable from "../components/datatable.jsx";
import {useEffect, useMemo, useState} from "react";
import {backPort} from '../../../backend/ports.js'
import Axios from "axios";
export default function Admin() {
    const getMusicListAPI = `http://localhost:${backPort}/api/musicList`
    const deleteSongAPI = `http://localhost:${backPort}/api/remove/`
    let requestBody = {};
    const [data,setData] = useState([]);
    const [fetchList, setFetchList] = useState(false);

    // const test = [
    //     { name: "Joe Smith", expertise: "Math", rating: 3},
    //     { name: "Megan Celica", expertise: "Biology", rating: 4},
    //     { name: "Bob Celica", expertise: "English", rating: 5}
    // ];
    let handleDelete = (id) => {
        Axios.delete(deleteSongAPI + id)
            .then(() =>{ })
            .catch(()=>{
            console.log("Error");
        })

    }


    //Create columns and display
    //Header = Display header name of column
    //Accessor = the column name in the database
    const columns = useMemo(
        () => [
            {
                Header: 'ID',
                accessor: 'song_id'
            },
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
                            handleDelete(row.original.song_id)
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

    //Create datatable using <Datatable data={data goes here} columns={columns} />
    return (
        <>
            <div>
                <div>Song Name:</div>
                <input className="search"></input>
                <div>Artist Name: </div>
                <input className="search"></input>
                <div>Length: </div>
                <div>mins</div>
                <input className="search" type="number" pattern="[0-9]*"></input>
                <div>seconds</div>
                <input className="search" type="number" pattern="[0-9]*"></input>
                <div>Created Date: </div>
                <input className="search"></input>
                <div>Genre: </div>
                <input className="search"></input>
                <div>Album Name: </div>
                <input className="search"></input>
                <DataTable data={data} columns={columns}/>
            </div>
        </>
    )
}
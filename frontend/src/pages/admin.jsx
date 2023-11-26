import DataTable from "../components/datatable.jsx";
import {useEffect, useMemo, useState} from "react";
import {backPort} from '../../../backend/ports.js'
import Axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Admin() {
    const getMusicListAPI = `http://localhost:${backPort}/api/musicList`
    const deleteSongAPI = `http://localhost:${backPort}/api/remove/`
    let requestBody = {};
    const [data,setData] = useState([]);
    const [fetchList, setFetchList] = useState(false);

    //Example data format:
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


    // Get API request using axios
    // Data received must be json format

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
                <DataTable data={data} columns={columns}/>
            </div>
        </>
    )
}
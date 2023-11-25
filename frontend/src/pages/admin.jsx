import DataTable from "../components/datatable.jsx";
import {useMemo, useState,useEffect} from "react";
//import Axios from "axios";
export default function Admin() {
    // const port = require('./ports');
    // const API = `localhost:${port} `

    const API = `localhost:8000/musicList`

    //Example data format:
    const test = [
        { name: "Joe Smith", expertise: "Math", rating: 3},
        { name: "Megan Celica", expertise: "Biology", rating: 4},
        { name: "Bob Celica", expertise: "English", rating: 5}
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
                Header: 'Name',
                accessor: 'name'
            },
            {
                Header: 'Song',
                accessor: 'expertise'
            },
            {
                Header: 'Rating',
                accessor: 'rating'
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
                <DataTable data={test} columns={columns}/>
            </div>
        </>
    )
}
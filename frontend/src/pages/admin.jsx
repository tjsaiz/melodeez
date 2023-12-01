import DataTable from "../components/datatable.jsx";
import {useEffect, useMemo, useState} from "react";
import {backPort} from '../../../backend/ports.js'
import Axios from "axios";
import {useNavigate} from "react-router-dom";
import "../styles/admin.css";

export default function Admin() {
    const getMusicListAPI = `http://localhost:${backPort}/api/musicList`
    const deleteSongAPI = `http://localhost:${backPort}/api/remove/`
    const updateSongAPI = `http://localhost:${backPort}/api/updateSong/`
    const addSongAPI = `http://localhost:${backPort}/api/add/`
    let requestBody = {};
    let addSongBody = {};
    let navigate = useNavigate();
    let addMinutes, addSeconds = "";
    const [data,setData] = useState([]);
    const [fetchList, setFetchList] = useState(false);

    // const test = [
    //     { name: "Joe Smith", expertise: "Math", rating: 3},
    //     { name: "Megan Celica", expertise: "Biology", rating: 4},
    //     { name: "Bob Celica", expertise: "English", rating: 5}
    // ];
    let handleDelete = (id) => {
        Axios.delete(deleteSongAPI + id)
            .then(() =>{
                setFetchList(!fetchList)
            })
            .catch(()=>{
            console.log("Error");
        })

    }
    let handleUpdateSong = (props) => {
        Axios.patch(updateSongAPI + props.song_id,props)
            .then(() => {
                setFetchList(!fetchList)
            })
            .catch(()=>{
                console.log("Error");
            })

    }
    let handleAddSong = () =>{
        Axios.post(addSongAPI, addSongBody)
            .then(()=>{
                navigate(0);
            })
            .catch (()=>{
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
                accessor: 'song_id',
                Cell: ({row}) =>
                    (
                        <input
                            name="song_id"
                            defaultValue={row.original.song_id}
                            type="text"
                            onChange={(e)=> row.original.song_id = e.target.value}
                        />
                    )
            },
            {
                Header: 'Song name',
                accessor: 'songName',
                Cell: ({row}) =>
                    (
                        <input
                            name="songName"
                            defaultValue={row.original.songName}
                            type="text"
                            onChange={(e)=> row.original.songName = e.target.value}
                        />
                    )
            },
            {
                Header: 'Artist',
                accessor: 'artistName',
                Cell: ({row}) =>
                    (
                        <input
                            name="artist_name"
                            defaultValue={row.original.artistName}
                            type="text"
                            onChange={(e)=> row.original.artistName = e.target.value}
                        />
                    )
            },
            {
                Header: 'Length',
                accessor: 'length',
                Cell: ({row}) =>
                    (
                        <input
                            name="length"
                            defaultValue={row.original.length}
                            type="text"
                            onChange={(e)=> row.original.length = e.target.value}
                        />
                    )
            },
            {
                Header: 'Date Published',
                accessor: 'createdDate',
                Cell: ({row}) =>
                    (
                        <input
                            name="createdDate"
                            defaultValue={row.original.createdDate}
                            type="text"
                            onChange={(e)=> row.original.createdDate = e.target.value}
                        />
                    )
            },
            {
                Header: 'Genre',
                accessor: 'genre',
                Cell: ({row}) =>
                    (
                        <input
                            name="genre"
                            defaultValue={row.original.genre}
                            type="text"
                            onChange={(e)=> row.original.genre = e.target.value}
                        />
                    )
            },
            {
                Header: 'Album',
                accessor: 'album',
                Cell: ({row}) =>
                    (
                        <input
                            name="album"
                            defaultValue={row.original.album}
                            type="text"
                            onChange={(e)=> row.original.album = e.target.value}
                        />
                    )
            },
            {
                accessor:'button',
                Cell: ({row}) =>
                    (
                        <>
                            <button onClick={ (e) => {
                                e.preventDefault();
                                handleUpdateSong(row.original);
                            }}>
                                Update
                            </button>
                            <button onClick={(e) => {
                                e.preventDefault();
                                handleDelete(row.original.song_id)
                                //setFetchList(!fetchList)
                                navigate(0);
                            }}>
                                Remove
                            </button>
                        </>
                    ),
            },
        ],
        []
    );
    // Get API request using axios
    // Data received must be json format

    useEffect( () => {
            Axios.get(getMusicListAPI, requestBody).then((response) => {
                setFetchList(false);
                //console.log(response.data);
                setData(response.data);
            })
    }, [fetchList]);

    //Create datatable using <Datatable data={data goes here} columns={columns} />
    return (
        <>
        <div>
            <div id="songInputs">
                <div>Song Name:</div>
                <input
                    className="songNameInput"
                    onChange={(e)=> addSongBody.songName = e.target.value}
                ></input>
                <div>Artist Name: </div>
                <input
                    className="artistInput"
                    onChange={(e)=> addSongBody.artistName = e.target.value}
                ></input>
                <div>Length: </div>
                <div>minutes</div>
                <input
                    className="minutesInput" type="number" pattern="[0-9]*"
                    onChange={(e)=> addMinutes = e.target.value}
                ></input>
                <div>seconds</div>
                <input
                    className="secondsInput" type="number" pattern="[0-9]*"
                    onChange={(e)=> addSeconds = e.target.value}
                ></input>
                <div>Created Date: </div>
                <input
                    className="creationInput"
                    onChange={(e)=> addSongBody.createdDate = e.target.value}
                ></input>
                <div>Genre: </div>
                <input
                    className="genreInput"
                    onChange={(e)=> addSongBody.genre = e.target.value}
                ></input>
                <div>Album Name: </div>
                <input
                    className="albumInput"
                    onChange={(e)=> addSongBody.album = e.target.value}
                ></input>
            </div>
                <button
                    className="addSongButton"
                    onClick={() => {
                        if (addMinutes < 1 || addMinutes === "" || typeof(addMinutes) == 'undefined') {
                            addSongBody.length = `${addSeconds} seconds`
                        }
                        else {
                            addSongBody.length = `${addMinutes} minutes ${addSeconds} seconds`
                        }
                        handleAddSong();
                    }}
                >
                    Add song
                </button>
                <DataTable data={data} columns={columns}/>
            </div>
        </>
    )
}
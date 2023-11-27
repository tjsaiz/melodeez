import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import {Route, Routes} from "react-router-dom";
import Admin from './pages/admin.jsx'
import Home from './pages/home.jsx'
import Edit from './pages/edit.jsx'
import Share from './pages/share.jsx'

/*
    TODO
    INSERT SONGS [ ]
    DELETE SONGS [x]
    UPDATE SONGS [ ]
    ADD TO SONGS TO PLAYLIST [x]
    REMOVE TO SONGS TO PLAYLIST [x]
    SEND SONG JSON FORMAT
    {
        "songName": "Despacito 2",
        "artistName": "Luis Fonsi ft. Daddy Yankee",
        "length": "41 seconds",
        "createdDate": 2020,
        "genre": "Pop",
        "album": "Abbey Road"
    }
    UPDATE SONG JSON FORMAT
    {
        "song_id":2,
        "songName": "Despacito 2",
        "artistName": "Luis Fonsi ft. Daddy Yankee",
        "length": "41 seconds",
        "createdDate": 2020,
        "genre": "Pop",
        "album": "Abbey Road"
    }
    FILTERS ? [ ]
 */
function App() {

  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/edit" element={<Edit/>}/>
            <Route path="/share" element={<Share/>}/>
        </Routes>
    </>
  )
}

export default App

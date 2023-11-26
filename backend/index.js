import {backPort} from './ports.js'
import express from "express";
import {db} from "./db.js";
import cors from 'cors';
import {getPlaylist} from "./queries/getPlaylist.js";
import {getMusicList} from "./queries/getMusicList.js";
import {addSong} from "./queries/addSong.js";
import {deleteSong} from "./queries/deleteSong.js"
import {addToPlaylist} from "./queries/editPlaylist.js";

// Create express app
const app = express()
app.use(cors())
app.use(express.json())
// Start server
app.listen(backPort, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",backPort))
});

app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

//Get musics/songs list
app.get("/api/musicList", (req,res,next) =>
{
    getMusicList(req,res);
});

//Insert song into the music library
app.post("/api/add", (req,res)=>{
    addSong(req,res);
});

//Delete a song from the music library
app.delete("/api/remove/:id", (req,res)=>{
    deleteSong(req,res);
});

//Change song description/information in the music library
app.patch("/api/updateSong/:id", (req,res) => {
    const updateQuery = `UPDATE ... FROM ... `
    db.run(
        updateQuery, (err,res)=>{
        if(err){
            return console.log(err.message);
        }

    });
});

//Get Playlist
app.get("/api/getPlaylist", (req,res,next) =>
{
    getPlaylist(req,res);
});

app.patch("/api/addToPlaylist/:id", (req,res,next) =>
{
    addToPlaylist(req,res);
});






// app.get("/api/filters", (req,res,next) =>
// {
//
//     db.all(
//         `SELECT name FROM PRAGMA_TABLE_INFO("songs")`,
//         (err,row)=>
//         {
//             if(err){
//                 res.status(400).json({"error": err.message})
//                 return;
//             }
//             res.get(row)
//         });
// });

// Default response for any other request
app.use(function(req, res){
    res.status(404);
});


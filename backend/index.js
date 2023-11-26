import {backPort} from './ports.js'
import express from "express";
import {db} from "./db.js";
import cors from 'cors';
// Create express app
const app = express()
app.use(cors())
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
    db.all(
        `SELECT * FROM songs`,
        (err,row)=>
        {
            if(err){
                res.status(400).json({"error": err.message})
                return;
            }
            res.json(row)
        });
});

//Insert song into the music library
app.post("/api/add", (req,res)=>{
    // item.songName, item.artistName, item.length, item.genre, item.album,
    // Needs to get json body here
    if (req === {}){
        res.json({"Error": "Input is empty or not found"})
    }else {
        db.run(
            `INSERT INTO songs(songName, artistName, length, genre, album) 
             VALUES (${req.songName}, ${req.artistName}, ${req.length}, ${req.genre}, ${req.album})`,
            (err, res) => {
                if (err) {
                    res.status(400).json({"error": err.message})
                    return;
                }
                res.json({"message": "success"})
            });
    }
});

//Delete a song from the music library
app.delete("/api/remove/:id", (req,res)=>{
    const id = req.params.id;
    db.run(
        `DELETE FROM songs WHERE song_id = ${id}` ,
        (err,res)=>{
            if (err) {
                throw err;
            }

    });
});

//Change song description/information in the music library
app.patch("/api/updateSong", (req,res) => {
    const updateQuery = `UPDATE ... FROM ... `
    db.run(
        updateQuery, (err,res)=>{
        if(err){
            return console.log(err.message);
        }

    });
});



// Default response for any other request
app.use(function(req, res){
    res.status(404);
});


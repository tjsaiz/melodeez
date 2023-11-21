// Create express app
const express = require("express");
const app = express()
// Server port
const PORT = 8000

//SQLite DB
const sql = require('sqlite3').verbose();
const db = new sql.Database('database file goes here', sql.OPEN_READWRITE, (err) => {
    //Connection errors check
    if (err) {
        return console.error(err);
    }
    console.log('Connected to database.');
});

// Start server
app.listen(PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",PORT))
});

app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

//Get musics/songs list
app.get("/musicList", (req,res) => {
    const getListQuery = `SELECT * FROM ...`
    db.all (getListQuery, (err,rows)=>{
        if(err){
            return console.log(err.message);
        }

    })
});

//Update music list
app.patch("/update", (req,res) => {
    const updateQuery = `UPDATE ... FROM ... `
    db.run(updateQuery, (err,res)=>{
        if(err){
            return console.log(err.message);
        }

    });
});

//Insert song
app.post("/add", (req,res)=>{
    const insertQuery = `INSERT ... FROM ...`
    db.run(insertQuery , (err,res)=>{
        if(err){
            return console.log(err.message);
        }

    });
});

//Delete song
app.delete("/remove", (req,res)=>{
    const deleteQuery = `DELETE ... FROM ...`
    db.run(deleteQuery , (err,res)=>{
        if(err){
            return console.log(err.message);
        }

    });
});


// Default response for any other request
app.use(function(req, res){
    res.status(404);
});


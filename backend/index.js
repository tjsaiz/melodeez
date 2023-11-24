// Create express app
const express = require("express");
const app = express()
const musicLibrary = require("./services.jsx")
// Server port
const PORT = 8000

// Start server
app.listen(PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",PORT))
});

app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

//Get musics/songs list
app.get("/musicList", (req,res) => {
    musicLibrary.getMusicList();
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


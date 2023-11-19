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

// Root endpoint
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

// Insert here other API endpoints

// Default response for any other request
app.use(function(req, res){
    res.status(404);
});


const sql = require('sqlite3').verbose();
const db = new sql.Database('sqlite.db', sql.OPEN_READWRITE, (err) => {
    //Connection errors check
    if (err) {
        return console.error(err);
    }
    console.log('Connected to database.');
});

module.exports = db;
import sqlite3 from 'sqlite3';

const sql = sqlite3.verbose();
const db = new sql.Database('database file goes here', (err) => {
    //Connection errors check
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to database.');
    });
    //Close database connection
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Closed connection.');
    });
import sqlite3 from "sqlite3";
const sql = sqlite3.verbose();

//Database file
const DBfile = './sqlite.db'

export const db = new sql.Database(DBfile, sql.OPEN_READWRITE, (err) => {
    //Connection errors check
    if (err) {
        return console.error(err);
    }
    console.log('Connected to database.');
});


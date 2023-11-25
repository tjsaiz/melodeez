const db = require('./db.jsx');

// MAIN PAGE
// get song list
// filers
// genre
// song name
// artist
// date

// playlist page
// add songs to playlist
// remove songs to playlist

// Admin
// add songs
// delete songs
// edit songs

async function addSong(item){

    // item.songName, item.artistName, item.length, item.genre, item.album,
    const result = await db.run(
        `INSERT INTO songs(songName, artistName, length, genre, album) 
             VALUES (${item.songName}, ${item.artistName}, ${item.length}, ${item.genre}, ${item.album})` ,
        (err,res)=>
        {
        if(err){
            return console.log(err.message);
        }
    return res;
    });

}

async function getMusicList(){
    const result = await db.run(
        `SELECT * FROM songs`,
        (err,res)=>
        {
            if(err){
                return console.log(err.message);
            }
            //return res;
        });
}

module.exports = {
    getMusicList,
    addSong,
    // deleteSong,
    // updateSong,
    // addSongToPlaylist,
    // deleteSongFromPlaylist,

}
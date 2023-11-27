import {db} from "../db.js";

export const updateSong = (req,res) => {
    console.log(req.body)
    let songBody = req.body;
    //Add to playlist
    db.run(`
        UPDATE songs 
        SET songName = '${songBody.songName}', 
            artistName='${songBody.artistName}', 
            length='${songBody.length}', 
            createdDate='${songBody.createdDate}', 
            genre='${songBody.genre}', 
            album='${songBody.album}'
        WHERE song_id = "${songBody.song_id}"`,
        (err,row) => {
        if (err) {
            console.log(err.message);
        }
        res.send();
    })

}
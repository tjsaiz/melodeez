import {db} from "../db.js";

export const updateSong = (req,res) => {
    const id = req.params.id;
    let songBody = req.body;
    db.run(`
        UPDATE songs 
        SET songName = '${songBody.songName}', 
            artistName='${songBody.artistName}', 
            length='${songBody.length}', 
            createdDate='${songBody.createdDate}', 
            genre='${songBody.genre}', 
            album='${songBody.album}'
        WHERE song_id = "${id}"`,
        (err,row) => {
        if (err) {
            console.log(err.message);
        }
        res.send();
    })

}
import {db} from "../db.js";

export const editPlaylist = (req,res) => {
    console.log(req.body)
    const id = req.body.id;
    const playlistCheck = req.body.playlist;
    //Add to playlist
    if (playlistCheck === 'FALSE'){
        db.run(`UPDATE songs SET added_to_playlist = 'TRUE' WHERE song_id = "${id}"`,
            (err,row) => {
                if (err) {
                    console.log(err.message);
                }
                console.log("ADDED")
            })

    }
    //Remove from playlist
    else if (playlistCheck === 'TRUE') {
        db.run(`UPDATE songs SET added_to_playlist = 'FALSE' WHERE song_id = "${id}"`,
            (err,row) => {
                if (err) {
                    console.log(err.message);
                }
                console.log("REMOVE")
            })

    }
    res.send();
}
import {db} from "../db.js";

export const editPlaylist = (req,res) => {
    const id = req.params.id;
    db.run(`UPDATE songs SET added_to_playlist = 'TRUE' WHERE song_id = "${id}"`,
        (err,row) => {
            if (err) {
                console.log(err.message);
                return;
            }
        })
    res.send();
}
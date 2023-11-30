import {db} from "../db.js";

export const deleteSong = (req,res) => {
    const id = req.params.id;
    db.run(
        `DELETE FROM songs WHERE song_id = ${id}` ,
        (err,row)=>{
            if (err) {
                throw err;
            }
            res.send()
        });
}

import {db} from "../db.js";

export const getPlaylist = (req,res) =>{
    db.all(
        `SELECT * FROM songs WHERE added_to_playlist = "TRUE"`,
        (err,row)=>
        {
            if(err){
                res.status(400).json({"error": err.message})
                return;
            }
            res.json(row)
        });
}
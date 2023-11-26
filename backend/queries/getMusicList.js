import {db} from "../db.js";

export const getMusicList =(req,res)=>{
    db.all(
        `SELECT * FROM songs`,
    (err,row)=>
    {
        if(err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json(row)
    });
}
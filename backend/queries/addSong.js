import {db} from '../db.js'

export const addSong = (req,res) => {

    let songBody = req.body;
    if (Object.keys(req.body).length === 0){
        console.log({"Error": "Input is empty or undefined"})
        res.send();
    }
    else {
        db.run(
            `INSERT INTO songs(songName, artistName, length, createdDate, genre, album) 
                VALUES ('${songBody.songName}', '${songBody.artistName}', '${songBody.length}', '${songBody.createdDate}', '${songBody.genre}', '${songBody.album}')`,
            (err, row) => {
                if (err) {
                    console.log(err.message);
                }
            });
        res.send();
    }


}


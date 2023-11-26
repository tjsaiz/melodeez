import {db} from '../db.js'

export const addSong = (req,res) => {
    // item.songName, item.artistName, item.length, item.genre, item.album,
    // Needs to get json body here

    let songBody = req.body;
    if (Object.keys(req.body).length === 0){
        console.log({"Error": "Input is empty or undefined"})
        res.send("TEST");
    }
    else {
        db.run(
            `INSERT INTO songs(songName, artistName, length, createdDate, genre, album) 
                VALUES ('${songBody.songName}', '${songBody.artistName}', '${songBody.length}', '${songBody.createdDate}', '${songBody.genre}', '${songBody.album}')`,
            (err, row) => {
                if (err) {
                    console.log(err.message);
                    return;
                }
            });
        res.send();
    }


}


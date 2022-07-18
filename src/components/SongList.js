import React, {useEffect} from "react";

function SongList({songData, setSongData}){

    // update state with our initial list of songs
    useEffect(() => {
      fetch("http://localhost:3000/songs")
        .then((r) => r.json())
        .then((songs) => setSongData([...songData, songs]));
    }, []);

  return (
    <div>
      {songData.map((song) => 
      <li key={song.id}>"{song.songName}" by {song.artistName}</li>
      )}
    </div>
  )
}

export default SongList;


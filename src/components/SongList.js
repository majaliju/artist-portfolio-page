import React from "react";

function SongList({songData}){

  return (
    <div>
      {songData.map((song) => 
      <li key={song.id}>"{song.songName}" by {song.artistName}</li>
      )}
    </div>
  )
}

export default SongList;


import React from "react";

function SongList({songData}){

  function consoleLogger(){
    console.log("(E5) SongList -> songData: ", songData)
  }

  return (
    <div>
      {songData.map((song) => 
      <li key={song.id}>"{song.songName}" by {song.artistName}</li>
      )}
    </div>
  )
}

export default SongList;


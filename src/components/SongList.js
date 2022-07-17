import React from "react";

function SongList({songData}){

  return (
    <div>
      {songData.map((song) => 
      <li key={songData.id}>"{songData.songName}" by {songData.artistName}</li>
      )}
    </div>
  )
}

export default SongList;


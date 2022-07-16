import React from "react";

function SongList({songData, setSongData}){

  return (
    <div>
      {songData.map((song) => 
      <li key={songData.id}>{songData.artistName}: "{songData.songName}"</li>
      )}
    </div>
  )
}

export default SongList;




  // songData.map(song => <li key={songData.id}>{songData.artistName}</li>)

  // songsToCover.map((song) => {
  //   <ul>
  //   <li>
  //     Artist Name: {song.artistName}
  //   </li>songData
  //   </ul>
  // })
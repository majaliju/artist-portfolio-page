import React from "react";

function SongList(songData){

  console.log("songData in songList: ", songData)

  // songData.map(song => <li key={songData.id}>{songData.artistName}</li>)

  // songsToCover.map((song) => {
  //   <ul>
  //   <li>
  //     Artist Name: {song.artistName}
  //   </li>songData
  //   </ul>
  // })



  return (
    <div>
      <h3>SONGS LIST</h3>
    </div>
  )
}

export default SongList;
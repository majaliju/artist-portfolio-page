import React from "react";

function SongList(songs){

  for (const {artistName, songName} in songs){
    console.log("The artist is: ", `${songs.artistName}`)
  }

  // songsToCover.map((song) => {
  //   <ul>
  //   <li>
  //     Artist Name: {song.artistName}
  //   </li>
  //   </ul>
  // })



  return (
    <div>
      <h3>SONGS LIST</h3>
    </div>
  )
}

export default SongList;
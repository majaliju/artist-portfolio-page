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


  // map each element then create a list for each element
  // songData.map(() => <li>{}</li>)

  // create a form for users to enter a song
  // send that information to the server



  return (
    <div>
      <h3>SONGS LIST</h3>
    </div>
  )
}

export default SongList;
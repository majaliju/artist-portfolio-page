import React, { useState, useEffect } from "react";
import SongForm from "./SongForm";
import { Divider } from "@chakra-ui/react";

function SongRequests() {
  // create a state for the song requests
  const [songData, setSongData] = useState([]);

  console.log("songData :", songData)

  // update state with our initial list of songs
  useEffect(() => {
    fetch("http://localhost:3000/songs")
      .then((r) => r.json())
      .then((songs) => setSongData(songs))
  }, []);

  // receives song from SongForm, then POSTS it
  function postNewSong(newSong) {
    fetch("http://localhost:3000/songs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSong),
    }) 
      .then((r) => r.json())
      .then((inputtedSong) =>{
        setSongData(songData => [...songData, inputtedSong])
      } );
  }

  /* idea for a duplicate checker to ensure there's no duplicates */

  return (
    <div>
      <SongForm onSubmit={postNewSong} />
      <Divider />
      <div>
      {songData.map((song) => 
      <li key={song.id}>"{song.songName}" by {song.artistName}</li>
      )}
    </div>
    </div>
  );
}

export default SongRequests;
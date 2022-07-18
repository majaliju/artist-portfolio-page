import React, { useState, useEffect } from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";
import { Divider } from "@chakra-ui/react";

function SongRequests() {
  // create a state for the song requests
  const [songData, setSongData] = useState([]);

  function consoleLogger(){
    console.log("songData: ", songData)
  }

  consoleLogger();

  // update state with our initial list of songs
  useEffect(() => {
    fetch("http://localhost:3000/songs")
      .then((r) => r.json())
      .then((songs) => setSongData([...songData, songs]));
      // .then((songs) => setSongData([...songData, songs]));
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
      .then((newSong) => setSongData(songData => [...songData, newSong]));

      
  }

  return (
    <div>
      <SongForm onSubmit={postNewSong} />
      <Divider />
      <SongList songData={songData} />
    </div>
  );
}

export default SongRequests;
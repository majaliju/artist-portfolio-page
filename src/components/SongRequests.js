import React, { useState, useEffect } from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";
import { Divider } from "@chakra-ui/react";

function SongRequests() {
  // create a state for the song requests
  const [songData, setSongData] = useState([]);


  function consoleLogger(){
    console.log("(A1) SongRequests -> SongData: ", songData)
  }

  consoleLogger();

  // update state with our initial list of songs
  useEffect(() => {
    fetch("http://localhost:3000/songs")
      .then((r) => r.json())
      .then((songs) => setSongData([...songData, songs]));
  }, []);

  // newSong is registering the newSong after receiving it 
  function postInputSong(newInputSong) {
    fetch("http://localhost:3000/songs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newInputSong),
    }) 
      .then((r) => r.json())
      .then((newInputSong) => setSongData([...songData, newInputSong]));
  }

  return (
    <div>
      <SongForm onSubmit={postInputSong} />
      <Divider />
      <SongList songData={songData} />
    </div>
  );
}

export default SongRequests;

import React, { useState, useEffect } from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";
import { Divider } from "@chakra-ui/react";

function SongRequests() {
  // create a state for the song requests
  const [songData, setSongData] = useState([]);


  // update state with our initial list of songs
  useEffect(() => {
    fetch("http://localhost:3000/songs")
      .then((r) => r.json())
      .then((songs) => setSongData([...songData, songs]));
  }, []);

  // receives song from SongForm, then POSTS it
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
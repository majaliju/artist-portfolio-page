import React, { useState, useEffect } from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";
import { Divider } from "@chakra-ui/react";

function SongRequests() {
  // create a state for the song requests
  const [songData, setSongData] = useState([]);

  // create a state for the form we need, within SongForm
  const [form, setForm] = useState({
    artistName: "",
    songName: "",
  });

  // update state with our initial list of songs
  useEffect(() => {
    fetch("http://localhost:3000/songs")
      .then((r) => r.json())
      .then((songs) => setSongData([...songData, songs]));
  }, []);

  // newSong is registering the newSong after receiving it 
  // from SongForm --> form = newSong
  function handleSubmit(newSong) {
    fetch("http://localhost:3000/songs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSong),
    })
      .then((r) => r.json())
      .then((newSong) => setSongData([...songData, newSong]));
  }

  return (
    <div>
      <SongForm onSubmit={handleSubmit} form={form} setForm={setForm} />
      <Divider />
      <SongList songData={songData} setSongData={setSongData} />
    </div>
  );
}

export default SongRequests;

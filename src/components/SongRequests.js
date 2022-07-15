import React, { useState, useEffect } from "react";
import SongForm from "./SongForm";

function SongRequests() {
  // create a state for the song requests
  let [songData, setSongData] = useState([]);

  // create a state for the form we need, within SongForm
  const [form, setForm] = useState({
    artistName: "",
    songTitle: "",
  });

  // update state with our list of songs
  useEffect(() => {
    fetch("http://localhost:3000/songs")
      .then((r) => r.json())
      .then((songs) => setSongData([...songData, songs]));
  }, []);

  function handleSubmit() {
    console.log("form: ", form);
  }

  // map each element then create a list for each element
  // songData.map(() => <li>{}</li>)

  // create a form for users to enter a song
  // send that information to the server

  return (
    <div>
      <SongForm
        onSubmit={handleSubmit}
        form = {form}
        setForm = {setForm}
      />
    </div>
  );
}

export default SongRequests;

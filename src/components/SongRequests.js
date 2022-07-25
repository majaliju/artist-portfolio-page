import React, { useState, useEffect } from "react";
import SongForm from "./SongForm";
import { Divider, List, ListItem, Center, Text } from "@chakra-ui/react";

function SongRequests() {
  // create a state for the song requests
  const [songData, setSongData] = useState([]);

  // update state with our initial list of songs
  useEffect(() => {
    fetch("http://localhost:3000/songs")
      .then((r) => r.json())
      .then((songs) => setSongData(songs));
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
      .then((inputtedSong) => {
        setSongData((songData) => [...songData, inputtedSong]);
      });
  }



  return (
    <div>
      <SongForm onSubmit={postNewSong} />

      <List spacing={2}>
        {songData.map((song) => (
          <ListItem key={song.id}>
            <Center>
              <Text fontFamily="Helvetica" fontWeight="thin" fontStyle="italic"
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="1xl"
              fontWeight="thin">
                "{song.songName}" by {song.artistName}
              </Text>
            </Center>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default SongRequests;

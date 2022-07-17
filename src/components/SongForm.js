import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Box,
  Center,
  Text,
  Button,
  Divider,
} from "@chakra-ui/react";

function SongForm({ onSubmit, newSong, setNewSong }) {

  // this holds the values of form
  // as it's being updated
  const [form, setForm] = useState({
    artistName: "",
    songName: "",
  });


  // just to test the value of form
  function consoleLogger() {
      console.log("SongForm -> form: ", form)
      console.log("SongForm -> newSong: ", newSong)
  }

  consoleLogger();

 
  // updates form with every keystroke
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    })
  };


  // handleSubmit for the button
  // then sends the information up to SongRequests
  // where it is POSTed to db.json and 
  // updating the songData state variable
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("handleSubmit -> form: ", form);
    console.log("handleSubmit -> newSong pre-state-assign: ", newSong)
    setNewSong(form)
    onSubmit(newSong)
  };


  return (
    /* make the form entries right-hand leaning (for mobile users) */
    <>
      <Box>
        <Center>
          <Text fontSize="2xl">I'm always looking for new songs to cover!</Text>
        </Center>
        <Divider />
      </Box>
      <SimpleGrid columns={3} spacing={20}>
        <Box>
          <FormControl>
            <FormLabel htmlFor="artistName">Artist/Band Name</FormLabel>
            <Input
              id="artistName"
              type="text"
              value={form.artistName}
              onChange={handleChange}
            />
          </FormControl>
        </Box>
      </SimpleGrid>
      <SimpleGrid columns={3} spacing={20}>
        <Box>
          <FormControl>
            <FormLabel htmlFor="songName">Song Name</FormLabel>
            <Input
              id="songName"
              type="text"
              value={form.songName}
              onChange={handleChange}
            />
          </FormControl>
        </Box>
      </SimpleGrid>
      c<Button onClick={handleSubmit}>submit!</Button>
    </>
  );
}

export default SongForm;


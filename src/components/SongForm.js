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

function SongForm({ onSubmit, form, setForm }) {
  function consoleLogger() {
    return console.log("form: ", form);
  }

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
              type="artistName"
              value={form.artistName}
              onChange={(e) => {
                setForm({
                  ...form,
                  artistName: e.target.value,
                });
              }}
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
              type="songName"
              value={form.songName}
              onChange={(e) => {
                setForm({
                  ...form,
                  songName: e.target.value,
                });
              }}
            />
          </FormControl>
        </Box>
      </SimpleGrid>

    c
      <Button onClick={onSubmit}>submit!</Button>
    </>
  );
}

export default SongForm;

  // replaced onSubmit with consoleLogger to test
      // if form is the proper value
      // form is properly being updated with the right values
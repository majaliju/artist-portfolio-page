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
  Divider
} from "@chakra-ui/react";

function SongForm({onSubmit, form, setForm}) {


  // via the consoleLogger test
  // form is retaining the values we intend (artistName & songName)
  // however, it isn't passing the values above
  function consoleLogger(){
    return console.log("form: ", form)
  }

  return (
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

      <Button onClick={onSubmit}>
        submit!
      </Button>
    </>
  );
}

export default SongForm;


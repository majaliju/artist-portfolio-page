import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  SimpleGrid,
  Box,
  Center,
  Text
} from "@chakra-ui/react";

function SongForm() {
  const [form, setForm] = useState({
    artistName: "",
    songTitle: "",
  });

  return (
    <>
    <Box>
      <Center>
        <Text fontSize="3x1">Enter a song you'd like to see covered!</Text>
      </Center>
    </Box>
      <SimpleGrid>
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
          <FormHelperText>Which artist or band?</FormHelperText>
        </FormControl>
      </SimpleGrid>
      <SimpleGrid>
        <FormControl>
          <FormLabel htmlFor="songName">Song Name</FormLabel>
          <Input id="songName" type="songName" />
          <FormHelperText>Enter the name of the song!</FormHelperText>
        </FormControl>
      </SimpleGrid>
    </>
  );
}

export default SongForm;

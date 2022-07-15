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
} from "@chakra-ui/react";

function SongForm({onSubmit}) {
  const [form, setForm] = useState({
    artistName: "",
    songTitle: "",
  });

  return (
    <>
    <Box>
      <Center>
        <Text fontSize="2xl">I'm always looking for new songs to cover!</Text>
      </Center>
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
          <Input id="songName" type="songName" />
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

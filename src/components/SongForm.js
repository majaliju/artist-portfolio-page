import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Box,
  Center,
  Flex,
  Text,
  Button,
  Divider,
} from "@chakra-ui/react";

function SongForm({ onSubmit }) {

  // this holds the values of form as it's being updated
  const [form, setForm] = useState({
    artistName: "",
    songName: "",
  });
 
  // updates form with every keystroke
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    })
  };

  // handleSubmit for the button, sends it up to SongRequests 
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(form)
  };


  return (
    /* make the form entries right-hand leaning (for mobile users) */

    /* have to handle proper styling later on -- add margins to side and design it well */
    <>
      <Box>
          <Text fontSize="2xl" direction="rtl">I'm always looking for new songs to cover!</Text>
        <Divider />
      </Box>
      <SimpleGrid >
        <Flex>
          <FormControl>
            <FormLabel htmlFor="artistName">Artist/Band Name</FormLabel>
            <Input
              id="artistName"
              type="text"
              value={form.artistName}
              onChange={handleChange}
            />
          </FormControl>
        </Flex>
      </SimpleGrid>
      <SimpleGrid >
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

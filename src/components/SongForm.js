import React, { useState } from "react";
import {useForm} from "react-hook-form";
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
} from "@chakra-ui/react";

function SongForm({ onSubmit }) {


/*
import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Artist/Band Name" {...register("Artist/Band Name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Song Name" {...register("Song Name", {required: true, maxLength: 100})} />

      <input type="submit" />
    </form>
  );
}
*/




  // this holds the values of form as it's being updated
  const [form, setForm] = useState({
    artistName: "",
    songName: "",
  });

  // updates form with every keystroke
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  // handleSubmit for the button, sends it up to SongRequests
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <>
      <Box>
        <Center>
        <Text fontSize="xl" fontWeight="light" fontFamily="Helvetica">
          ADD A SONG YOU'D LIKE ME TO COVER
        </Text>
        </Center>
        
      </Box>
      <SimpleGrid>
        <Flex>
          <FormControl >
            <FormLabel htmlFor="artistName"></FormLabel>
            <Center>
            <Input
              focusBorderColor="lime"
              id="artistName"
              type="text"
              variant="flushed"
              htmlSize={55} width='auto'
              placeholder="Artist/Band Name"
              value={form.artistName}
              onChange={handleChange}
            /></Center>
          </FormControl>
        </Flex>
      </SimpleGrid>
      <SimpleGrid>
        <Box>
          <FormControl>
            <FormLabel htmlFor="songName"></FormLabel>
            <Center>
            <Input
              focusBorderColor="lime"
              id="songName"
              type="text"
              variant="flushed"
              htmlSize={55} width='auto'
              placeholder="Song Name"
              value={form.songName}
              onChange={handleChange}
            /></Center>
          </FormControl>
        </Box>
      </SimpleGrid>
      <Center>
      <Button onClick={handleSubmit} 
      borderRadius='md'
      bgGradient='linear(to-l, #7928CA, #FF0080)'
      _hover={{
        bgGradient: 'linear(to-r, red.500, yellow.500)',
      }}>
        submit!
      </Button>
      </Center>
    </>
  );
}

export default SongForm;

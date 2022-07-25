import React, { useState } from "react";
import { useForm } from "react-hook-form";
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
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
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
      [e.target.id]: e.target.value,
    });
  };

  // handleSubmit for the button, sends it up to SongRequests
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.artistName !== "" || form.songName !== "") {
      onSubmit(form);
    } else {
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>Enter a real artist!</AlertTitle>
        <AlertDescription>
          I won't cover John Cage 4'33, sorry.
        </AlertDescription>
      </Alert>;
    }
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
          <FormControl>
            <FormLabel htmlFor="artistName"></FormLabel>
            <Center>
              <Input
                focusBorderColor="lime"
                id="artistName"
                type="text"
                variant="flushed"
                htmlSize={55}
                width="auto"
                placeholder="Artist/Band Name"
                value={form.artistName}
                onChange={handleChange}
              />
            </Center>
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
                htmlSize={55}
                width="auto"
                placeholder="Song Name"
                value={form.songName}
                onChange={handleChange}
              />
            </Center>
          </FormControl>
        </Box>
      </SimpleGrid>
      <Center>
        <Button
          onClick={handleSubmit}
          borderRadius="md"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          _hover={{
            bgGradient: "linear(to-r, red.500, yellow.500)",
          }}
        >
          submit!
        </Button>
      </Center>
    </>
  );
}

export default SongForm;

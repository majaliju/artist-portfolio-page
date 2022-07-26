import React, { useState } from "react";
import {
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Box,
  Center,
  Flex,
  Text,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";

function SongForm({ onSubmit }) {
  // this holds the values of form as it's being updated
  const [form, setForm] = useState({
    artistName: "",
    songName: "",
  });

  // necessary for the alert message
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  // updates form with every keystroke
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  // handleSubmit for the button, sends it up to SongRequests
  // check also if the user doesn't enter empty values; 
  // if so, they're requested to enter an actual song
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.artistName !== "" && form.songName !== "") {
      onSubmit(form);
    } else {
      onOpen();
    }
  };

  /* I have to introduce a duplicate checker at a point */

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
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogBody>Please enter a real song!</AlertDialogBody>

              <AlertDialogFooter>
                <Button colorScheme="pink" onClick={onClose} ml={3}>
                  Ok, fine
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Center>
    </>
  );
}

export default SongForm;

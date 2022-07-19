import React from "react";
import {
  Image,
  Heading,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Text,
  Button,
  useDisclosure,
  AspectRatio,
} from "@chakra-ui/react";

function About() {
  // for the modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Center borderRadius="4px">
        <Heading lineHeight="tall">Who is MAJ ALIJU?</Heading>
      </Center>
      <Center>
        <Image
          onClick={onOpen}
          boxSize="xs"
          src="/images/maj-dark-avy.jpg"
        />
      </Center>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Center>
            <ModalHeader>BIO</ModalHeader>
          </Center>
          <ModalBody>
            <Center>
              <Text>Here is the story of my life yada yada yada</Text>
            </Center>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="purple" mr={3} onClick={onClose}>
              EXIT
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default About;

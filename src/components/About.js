import React from "react";
import { Image, Heading, Center,Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,Text, Button, useDisclosure } from "@chakra-ui/react";

function About() {

  // for the modal
  const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <div>
      <Heading lineHeight="tall">Who is MAJ ALIJU?</Heading>
      <Image onClick={onOpen} boxSize="sm" src="/images/maj-dark-avy.jpg"></Image>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>TELL US MORE</ModalHeader>
          <ModalBody>
            <Text>
              Here is the story of my life yada yada yada
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              EXIT
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default About;

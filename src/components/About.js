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
        <Heading lineHeight="tall" fontWeight="thin">WHO IS MAJ ALIJU?</Heading>
      </Center>
      <Center>
        <Image onClick={onOpen} boxSize="xs" src="/images/maj-dark-avy.jpg" />
      </Center>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <Center>
            <ModalHeader>BIO</ModalHeader>
          </Center>
          <ModalBody>
            <Center>
              <Text fontStyle="italic" fontWeight="thin" fontSize="sm">
                Born during an international war crisis in Prishtina (Kosova),
                Maj Aliju (pronounced "my alee-you") and his parents became
                refugees when they left in pursuit of freedom to America. 
                Raised in Queens, New York City Maj took up producing music and rapping
                in middle school before also teaching himself guitar, bass, and
                piano while in high school. Despite this intense devotion to
                music in every form, halfway through college Maj put music on
                hold to be in a serious relationship. However, after seven years
                and "some of the best and worst moments, both" of his life, Maj
                Aliju returned to music and also fulfilled a life-long dream of
                learning how to sing just before the start of the pandemic.
                Today, Maj Aliju is based out of Brooklyn and is releasing music
                that he himself sings, writes, produces and plays instruments
                on. His writing themes involve the unspoken-albeit-universal
                human experiences, human nature itself, and the role of our
                subconsciously-influenced psychology in our expression of self.
                He also occasionally DJ's and does remixes albeit more rarely
                nowadays; he has generated a wide listening audience so far
                through these. You can find out more about Maj on Instagram,
                TikTok, YouTube etc under @majaliju on everything.{" "}
              </Text>
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

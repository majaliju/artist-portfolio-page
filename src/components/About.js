import React from "react";
import { Image, Heading, Center } from "@chakra-ui/react";

function About() {
  return (
    <div>
      <Center>
        <Heading lineHeight="tall">Who is MAJ ALIJU?</Heading>
      </Center>
      <Center>
        <Image boxSize="sm" src="/images/maj-dark-avy.jpg"></Image>
      </Center>
    </div>
  );
}

export default About;

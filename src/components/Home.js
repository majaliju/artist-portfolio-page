import React from "react";
import {
  Text,
  Center,
  Box,
  Button,
  ButtonGroup,
  Link
} from "@chakra-ui/react";
import { FaSpotify, FaApple, FaYoutube, FaAngleDoubleUp } from "react-icons/fa";

function Home() {
  return (
    <Box>
      <Center>
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="3xl"
          fontWeight="thin"
        >
          WELCOME!
        </Text>
      </Center>
      <Center>
        <iframe
          width="360"
          height="315"
          src="https://www.youtube.com/embed/CCdInkRwWO0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Center>
      <Center>
        <Text fontSize="1xl" fontWeight="thin">
          MY NEW SINGLE 'MET YOU BEFORE' IS OUT !
        </Text>
      </Center>
      <Center>
        <ButtonGroup spacing={6}>
          <Link href="https://open.spotify.com/track/3UNEFsa2dtfM4AYfhg0xr9?si=b479c118f5b74f65">
            <Button size="lg" variant="ghost">
              <FaSpotify />
            </Button>
          </Link>
          <Link href="https://music.apple.com/us/album/met-you-before-single/1630988278?uo=4&app=music&at=1001lry3&ct=dashboard">
            <Button size="lg" variant="ghost">
              <FaApple />
            </Button>
          </Link>
          <Link href="https://www.youtube.com/watch?v=CCdInkRwWO0">
            <Button size="lg" variant="ghost">
              <FaYoutube />
            </Button>
          </Link>
          <Link href="https://solo.to/majaliju">
            <Button size="lg" variant="ghost">
              <FaAngleDoubleUp />
            </Button>
          </Link>
        </ButtonGroup>
      </Center>
    </Box>
  );
}

export default Home;

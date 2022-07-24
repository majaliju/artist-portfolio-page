import React from "react";
import { Text, Center, Box, Button, ButtonGroup, Link, Icon } from "@chakra-ui/react";
import { FaSpotify, FaApple, FaYoutube, FaAngleDoubleUp } from "react-icons/fa";

/* on home page, we're going to display my current
video (MYB) plus links to social media */

/* code to embed MET YOU BEFORE

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3UNEFsa2dtfM4AYfhg0xr9?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>

*/

<iframe
  style="border-radius:12px"
  src="https://open.spotify.com/embed/track/3UNEFsa2dtfM4AYfhg0xr9?utm_source=generator"
  width="100%"
  height="380"
  frameBorder="0"
  allowfullscreen=""
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
></iframe>;

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
          style={{ borderRadius: 12 }}
          src="https://open.spotify.com/embed/track/3UNEFsa2dtfM4AYfhg0xr9?utm_source=generator"
          width="full%"
          height="full"
          frameBorder={0}
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
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
          <Link href="https://open.spotify.com/track/3UNEFsa2dtfM4AYfhg0xr9?si=b479c118f5b74f65">
          <Button size="lg" variant="ghost">
            <FaApple />
          </Button>
          </Link>
          <Link href="https://open.spotify.com/track/3UNEFsa2dtfM4AYfhg0xr9?si=b479c118f5b74f65">
          <Button size="lg" variant="ghost">
            <FaYoutube />
          </Button>
          </Link>
          <Link href="https://open.spotify.com/track/3UNEFsa2dtfM4AYfhg0xr9?si=b479c118f5b74f65">
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

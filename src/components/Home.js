import React from 'react';
import { Text, Center, Box, Button, ButtonGroup, Link } from '@chakra-ui/react';
import { FaSpotify, FaApple, FaYoutube, FaAngleDoubleUp } from 'react-icons/fa';

/* on home page, we're going to display my current
video (MYB) plus links to social media */

/* code to embed MET YOU BEFORE

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3UNEFsa2dtfM4AYfhg0xr9?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>

*/
<div>
  <iframe
    style='border-radius:12px'
    src='https://open.spotify.com/embed/track/3UNEFsa2dtfM4AYfhg0xr9?utm_source=generator'
    width='100%'
    height='380'
    frameBorder='0'
    allowfullscreen=''
    allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'></iframe>
</div>;

function Home() {
  return (
    <Box>
      <Center>
        <Text
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgClip='text'
          fontSize='3xl'
          fontWeight='thin'>
          WELCOME!
        </Text>
      </Center>
      <Center>
        <iframe
          width='360'
          height='315'
          src='https://www.youtube.com/embed/CCdInkRwWO0'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen></iframe>
      </Center>
      <Center>
        <Text fontSize='1xl' fontWeight='thin'>
          MY NEW SINGLE 'MET YOU BEFORE' IS OUT !
        </Text>
      </Center>
      <Center>
        <ButtonGroup spacing={6}>
          <Link href='https://open.spotify.com/track/3UNEFsa2dtfM4AYfhg0xr9?si=b479c118f5b74f65'>
            <Button size='lg' variant='ghost'>
              <FaSpotify />
            </Button>
          </Link>
          <Link href='https://music.apple.com/us/album/met-you-before-single/1630988278?uo=4&app=music&at=1001lry3&ct=dashboard'>
            <Button size='lg' variant='ghost'>
              <FaApple />
            </Button>
          </Link>
          <Link href='https://www.youtube.com/watch?v=CCdInkRwWO0'>
            <Button size='lg' variant='ghost'>
              <FaYoutube />
            </Button>
          </Link>
          <Link href='https://solo.to/majaliju'>
            <Button size='lg' variant='ghost'>
              <FaAngleDoubleUp />
            </Button>
          </Link>
        </ButtonGroup>
      </Center>
    </Box>
  );
}

export default Home;

import React from "react";
import { Text } from '@chakra-ui/react'


/* on home page, we're going to display my current
video (MYB) plus links to social media */


function Home(){
  return (
    <div>
      <Text
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgClip='text'
          fontSize='2xl'
          fontWeight='extrabold'
        >
          THE OFFICIAL SITE OF MUSIC ARTIST MAJ ALIJU
        </Text>
    </div>
  )
}

export default Home;
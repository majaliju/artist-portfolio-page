import React from "react";
import { Text } from '@chakra-ui/react'

function Home(){
  return (
    <div>
      <Text
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgClip='text'
          fontSize='2xl'
          fontWeight='extrabold'
        >
          this is the home page
        </Text>
    </div>
  )
}

export default Home;
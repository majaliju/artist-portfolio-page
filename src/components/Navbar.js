import React from "react";
import { NavLink } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Text} from '@chakra-ui/react'


function Navbar(){
  return (
    <Tabs>
      <TabList>
        <Tab><Text
  bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='1xl'
  fontWeight='extrathin'
>
  MAJ ALIJU
</Text></Tab>
        <Tab><NavLink to="/Home" exact>
        <Text
  bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='1xl'
  fontWeight='extrathin'
>
  home
</Text>
          </NavLink></Tab>
        <Tab><NavLink to="/About" exact>
        <Text
  bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='1xl'
  fontWeight='extrathin'
>
  about
</Text>
          </NavLink></Tab>
        <Tab><NavLink to="/SongRequests" exact>
        <Text
  bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='1xl'
  fontWeight='extrathin'
>
  song requests
</Text>
          </NavLink></Tab>
      </TabList>
    </Tabs>
    
  )
}

export default Navbar;
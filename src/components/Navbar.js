import React from "react";
import { NavLink } from "react-router-dom";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  useColorMode,
  Button, Center
} from "@chakra-ui/react";

/* add an element to toggle light/dark */

function Navbar() {

  // for the color changing Button, changes Dark to Light and vice versa
  const { colorMode, toggleColorMode } = useColorMode()

  // do a full gradient slope amongst the colors
/*
  color1 to color 2 for item 1,
  color 2 to color 3 for item 2, etc */


  return (
    <Tabs>
      <Center>
      <TabList>
        <Tab>
          <NavLink to="/Home" exact>
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="1xl"
              fontWeight="extrathin"
            >
              MAJ ALIJU
            </Text>
          </NavLink>
        </Tab>
        <Tab>
          <NavLink to="/About" exact>
            <Text
              bgGradient="linear(to-l, #FF0080, #FF0080)"
              bgClip="text"
              fontSize="1xl"
              fontWeight="extrathin"
            >
              ABOUT ME
            </Text>
          </NavLink>
        </Tab>
        <Tab>
          <NavLink to="/SongRequests" exact>
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="1xl"
              fontWeight="extrathin"
            >
              SONG REQUESTS
            </Text>
          </NavLink>
        </Tab>
        <Tab>
        <Text 
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="1xl"
        fontWeight="extrathin"
        onClick={toggleColorMode}>
          {colorMode === 'light' ? 'GO DARK' : 'GO LIGHT'}
        </Text>
        </Tab>
      </TabList>
      </Center>
    </Tabs>
  );
}

export default Navbar;

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
  Button
} from "@chakra-ui/react";

/* add an element to toggle light/dark */

function Navbar() {

  // for the color changing Button
  // changes Dark to Light and vice versa
  const { colorMode, toggleColorMode } = useColorMode()


  return (
    <Tabs>
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
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="1xl"
              fontWeight="extrathin"
            >
              ABOUT
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
    </Tabs>
  );
}

export default Navbar;

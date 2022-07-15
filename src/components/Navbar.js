import React from "react";
import { NavLink } from "react-router-dom";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from "@chakra-ui/react";

function Navbar() {
  return (
    <Tabs>
      <TabList>
        <Tab>
          <NavLink to="/HOME" exact>
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
      </TabList>
    </Tabs>
  );
}

export default Navbar;

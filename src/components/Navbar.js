import React from "react";
import { NavLink } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

function Navbar(){
  return (
    <Tabs>
      <TabList>
        <Tab>MAJ ALIJU</Tab>
        <Tab><NavLink to="/Home" exact>
            Home
          </NavLink></Tab>
        <Tab><NavLink to="/About" exact>
            About
          </NavLink></Tab>
        <Tab><NavLink to="/SongRequests" exact>
            SongRequests
          </NavLink></Tab>
      </TabList>
    </Tabs>
    
  )
}

export default Navbar;
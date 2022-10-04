import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Tabs,
  TabList,
  Tab,
  Text,
  useColorMode,
  Center,
} from '@chakra-ui/react';


function Navbar() {
  // for the color changing Button, changes Dark to Light and vice versa
  const { colorMode, toggleColorMode } = useColorMode();


  return (
    <Tabs>
      <Center>
        <TabList>
          <Tab>
            <NavLink to='/' exact>
              <Text
                bgGradient='linear(to-l, #7928CA, #FF0080)'
                bgClip='text'
                fontSize='1xl'
                fontWeight='thin'>
                MAJ ALIJU
              </Text>
            </NavLink>
          </Tab>
          <Tab>
            <NavLink to='/About' exact>
              <Text
                bgGradient='linear(to-l, #7928CA, #FF0080)'
                bgClip='text'
                fontSize='1xl'
                fontWeight='thin'>
                ABOUT ME
              </Text>
            </NavLink>
          </Tab>
          <Tab>
            <NavLink to='/SongRequests' exact>
              <Text
                bgGradient='linear(to-l, #7928CA, #FF0080)'
                bgClip='text'
                fontSize='1xl'
                fontWeight='thin'>
                SONG REQUESTS
              </Text>
            </NavLink>
          </Tab>
          <Tab>
            <Text
              bgGradient='linear(to-l, #7928CA, #FF0080)'
              bgClip='text'
              fontSize='1xl'
              fontWeight='thin'
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

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter as Router} from "react-router-dom";
import { ColorModeScript } from '@chakra-ui/react'
import theme from './components/theme'

ReactDOM.render(
  <Router>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </Router>,
  document.getElementById("root")
);


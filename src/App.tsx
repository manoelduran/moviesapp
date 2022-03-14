import React from 'react';
import theme from '../src/styles/global';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Rotas from './router';
function App() {

  return (
    <ChakraProvider theme={theme}>
    <Router>
      <Rotas/>
    </Router>
    </ChakraProvider>
  );
};

export default App;

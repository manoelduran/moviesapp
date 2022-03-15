import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './styles/global';

import Rotas from './router';
function App() {

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Rotas />
      </Router>
    </ChakraProvider>
  );
};

export default App;

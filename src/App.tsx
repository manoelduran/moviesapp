import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { GlobalStyle } from './styles/global';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Rotas from './router';
function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Rotas />
      </Router>
    </ThemeProvider>
  );
};

export default App;

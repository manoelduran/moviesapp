import { extendTheme, useTheme } from "@chakra-ui/react";
const overrides = {
  colors: {
    black: 'black',
    shadow: '#050206',
    rate: '#ffe400',
    purple: '#835AFD',
    gray_dark: '#737380',
    gray_medium: '#A8A8B3',
    gray_light: '#DBDCDD',
    border: '#E2E2E2',
    white: '#FFFFFF',
    white_background: '#F8F8F8',
    white_details: '#FEFEFE',
    hover_purple: '#6F4BD8',
    hover_danger: '#D73754',
    hover_gray_medium: '#7E7E86',
    hover_gray_light: '#CECECE',
    red: 'red'
  },
  styles: {
    global: {
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
      'root, body, html': {
        w: '100vw',
        h: '100vh',
      },
      body: {
        bg: 'black',
        color: '#FEFEFE',
      },
      'body , input , button , textarea': {
        fontStyle: '1rem',
        fontWeight: 400,
        fontFamily: 'Roboto',
      },
      'button': {
        cursor: 'pointer',
      },
      'a': {
        textDecoration: 'none',
      }
    },
  }
};

const theme = extendTheme(overrides);

export default theme;

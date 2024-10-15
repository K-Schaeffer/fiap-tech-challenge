'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-family)',
    h1: {
      fontSize: '1.562rem',
    },
    subtitle1: {
      fontSize: '1.250rem',
    },
    body1: {
      fontSize: '1rem',
    },
    caption: {
      fontSize: '.812rem',
    },
  },
  palette: {
    primary: {
      main: '#004D61',
      light: '#DEE9EA',
      dark: '#003849',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FF5031',
      light: '#FEA996',
      dark: '#BE311B',
      contrastText: '#FFFFFF',
    },
  },
});

export default theme;

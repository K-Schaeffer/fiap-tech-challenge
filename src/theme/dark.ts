'use client';
import { createTheme } from '@mui/material/styles';
import defaultTheme from './default';

const dark = createTheme({
  ...defaultTheme,
  cssVariables: true,
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          main: '#47A138',
          contrastText: '#FFFFFF',
        },
        secondary: {
          main: '#FFFFFF',
          contrastText: '#000000',
        }
      }
    },
  },
});

export default dark;

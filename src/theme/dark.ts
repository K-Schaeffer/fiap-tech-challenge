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
        }
      }
    },
  },
});

export default dark;

'use client';
import { createTheme } from '@mui/material/styles';
import defaultTheme from './default';

const light = createTheme({
  ...defaultTheme,
  cssVariables: true,
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

export default light;

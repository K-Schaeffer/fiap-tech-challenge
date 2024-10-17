import { ThemeOptions } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

const defaultTheme: ThemeOptions = {
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
}

export const light = createTheme({
  ...defaultTheme,
  cssVariables: true,
  palette: {
    mode: 'light',
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

export const dark = createTheme({
  ...defaultTheme,
  cssVariables: true,
  palette: {
    mode: 'dark',
    primary: {
      main: '#47A138',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFFFFF',
      contrastText: '#000000',
    }
  }
});

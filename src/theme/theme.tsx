import { createTheme, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    tertiary?: Palette["primary"];
    textLight?: Palette["primary"];
    bgCard?: Palette["primary"];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions["primary"];
    textLight?: PaletteOptions["primary"];
    bgCard?: PaletteOptions["primary"];
  }
}

const defaultTheme: ThemeOptions = {
  typography: {
    fontFamily: "var(--font-family)",
    h1: {
      fontSize: "1.562rem",
    },
    subtitle1: {
      fontSize: "1.250rem",
    },
    body1: {
      fontSize: "1rem",
    },
    caption: {
      fontSize: ".812rem",
    },
  },
};

export const light = createTheme({
  ...defaultTheme,
  cssVariables: true,
  palette: {
    mode: "light",
    primary: {
      main: "#004D61",
      light: "#DEE9EA",
      dark: "#003849",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FF5031",
      light: "#FEA996",
      dark: "#BE311B",
      contrastText: "#FFFFFF",
    },
    tertiary: {
      main: "#47A138",
    },
    textLight: {
      main: "#8B8B8B",
    },
    bgCard: {
      main: "#FFFFFF",
      light: "#CBCBCB",
      dark: "#004D61",
      contrastText: "#FFFFFF",
    },
  },
});

export const dark = createTheme({
  ...defaultTheme,
  cssVariables: true,
  palette: {
    mode: "dark",
    primary: {
      main: "#47A138",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FFFFFF",
      contrastText: "#000000",
    },
  },
});

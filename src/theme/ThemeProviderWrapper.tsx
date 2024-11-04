"use client";
import { ThemeProvider } from "@mui/material/styles";
import { usePathname } from "next/navigation";
import CssBaseline from "@mui/material/CssBaseline";
import { light, dark } from "./theme";

interface ThemeProviderWrapperProps {
  children: React.ReactNode;
}

const ThemeProviderWrapper = ({ children }: ThemeProviderWrapperProps) => {
  const route = usePathname();

  return (
    <ThemeProvider theme={route === "/" ? dark : light}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;

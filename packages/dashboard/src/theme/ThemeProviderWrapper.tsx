"use client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { dark, light } from "components/theme";
import { usePathname } from "next/navigation";

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

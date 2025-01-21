import ThemeProviderWrapper from "@/theme/ThemeProviderWrapper";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { AppProps } from "next/app";
import "./globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppRouterCacheProvider options={{ key: "css" }}>
      <ThemeProviderWrapper>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProviderWrapper>
    </AppRouterCacheProvider>
  );
}

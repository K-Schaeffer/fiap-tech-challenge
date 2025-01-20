import ThemeProviderWrapper from "@/theme/ThemeProviderWrapper";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "./globals.css";

const font = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-family",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={font.variable}>
      <AppRouterCacheProvider options={{ key: "css" }}>
        <ThemeProviderWrapper>
          <Component {...pageProps} />
        </ThemeProviderWrapper>
      </AppRouterCacheProvider>
    </div>
  );
}

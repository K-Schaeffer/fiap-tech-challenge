// pages/_app.tsx
import ThemeProviderWrapper from "@/theme/ThemeProviderWrapper";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "./globals.css";

// Define the Inter font with the variable class
const font = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-family", // Define the font variable
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    // Apply the font variable class to the root div or body
    <div className={font.variable}>
      <AppRouterCacheProvider options={{ key: "css" }}>
        <ThemeProviderWrapper>
          <Component {...pageProps} />
        </ThemeProviderWrapper>
      </AppRouterCacheProvider>
    </div>
  );
}

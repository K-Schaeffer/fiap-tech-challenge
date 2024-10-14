import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import './globals.css';

export const metadata: Metadata = {
  title: "Bytebank",
  description: "By FIAP Tech Challenge",
};

const font = Inter({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-family',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.variable}>
        <AppRouterCacheProvider
          options={{ key: 'css' }}
        >
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

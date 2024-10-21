import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Inter } from 'next/font/google';
import ThemeProviderWrapper from "@/theme/ThemeProviderWrapper";
import './globals.css';

export const metadata: Metadata = {
  title: "Bytebank",
  description: "By FIAP Tech Challenge",
};

export const font = Inter({
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
    <html lang="pt-BR">
      <body className={font.variable}>
        <AppRouterCacheProvider
          options={{ key: 'css' }}
        >
          <ThemeProviderWrapper>
            {children}
          </ThemeProviderWrapper>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

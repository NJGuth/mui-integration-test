import type { Metadata } from "next";
import theme from "@/styles/mui-theme";
import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";

import { ModeHotKey } from "@/components/utility/mode-hotkey";
import { ScreenSize } from "@/components/utility/screen-size";

export const metadata: Metadata = {
  title: "MUI Playground",
  description: "Making MUI work with Next.js 15 App Router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider theme={theme}>
        <body className={` antialiased`}>
          <ModeHotKey />
          <ScreenSize />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}

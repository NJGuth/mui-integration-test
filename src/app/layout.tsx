import type { Metadata } from "next";
import theme from "@/styles/mui-theme";
import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";

import { ModeHotKey } from "@/components/utility/mode-hotkey";
import { ScreenSize } from "@/components/utility/screen-size";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";

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
          <SidebarProvider>
            <AppSidebar />
            <main className="min-h-screen w-full">
              <div className="p-3 bg-slate-200 sticky top-0">
                <SidebarTrigger />
              </div>
              <div className="p-3">{children}</div>
            </main>
          </SidebarProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}

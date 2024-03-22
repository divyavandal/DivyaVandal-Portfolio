import "./globals.css";

import AppContainer from "@/components/app-container/app-container";
import type { Metadata } from "next";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/configs/theme";

export const metadata: Metadata = {
  title: "Divya Vandal",
  description: "Portfolio of Divya Vandal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <AppContainer>{children}</AppContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}

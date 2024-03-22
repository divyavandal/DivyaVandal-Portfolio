"use client";

import * as React from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Toolbar from "@mui/material/Toolbar";

interface AppContainerProps {
  children: React.ReactNode;
}

export default function AppContainer({ children }: AppContainerProps) {
  return (
    <>
      <CssBaseline />

      <Header />

      <Box
        component="main"
        sx={{ paddingTop: { xs: "56px", sm: "64px", md: "100px" } }}
      >
        {children}
      </Box>

      <Footer />
    </>
  );
}

"use client";

import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { rgba } from "polished";

const drawerWidth = 240;
const navItems = [
  { navText: "Home", navRoute: "/home" },
  { navText: "Portfolio", navRoute: "/portfolio" },
  { navText: "Design Process", navRoute: "/design-process" },
  { navText: "About", navRoute: "/about" },
  { navText: "Contact", navRoute: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const appBarStyle = {
    bgcolor: "#123018",
    minHeight: { xs: "56px", sm: "64px", md: "80px" },
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };

  const logoStyle = {
    marginLeft: { xs: "10px", sm: "20px", md: "50px", lg: "70px" },
  };

  const navStyle = {
    marginRight: { xs: "10px", sm: "20px", md: "50px", lg: "70px" },
  };

  return (
    <>
      <AppBar component="nav" sx={appBarStyle}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Box sx={logoStyle}>
              <Typography variant="h6">Divya Vandal</Typography>
            </Box>
          </Grid>

          <Grid item>
            <Box sx={navStyle}>
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Grid container spacing={4}>
                  {navItems.map((navItem) => (
                    <Grid item key={navItem.navText}>
                      <Link href={navItem.navRoute} key={navItem.navText}>
                        <Typography variant="subtitle1" key={navItem.navText}>
                          {navItem.navText}
                        </Typography>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        anchor="right"
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
          <List>
            {navItems.map((navItem) => (
              <ListItem key={navItem.navText} disablePadding>
                <ListItemButton
                  sx={{ textAlign: "center" }}
                  key={navItem.navText}
                >
                  <ListItemText
                    primary={navItem.navText}
                    key={navItem.navText}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

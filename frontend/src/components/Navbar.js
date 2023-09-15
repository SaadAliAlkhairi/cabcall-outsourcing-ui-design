import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobileScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <AppBar
        sx={{
          position: "fixed",
          top: "20px",
          right: "auto",
          left: "auto",
          margin: "0 auto",
          width: "85%",
          maxWidth: "1350px",
          borderRadius: "100px",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingY: "5px",
            backgroundColor: "contrast.main",
            borderRadius: "100px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              backgroundColor: "black",
              borderRadius: "100px",
              paddingY: "3px",
              px: 1,
              fontWeight: "bold",
            }}
          >
            CabCall
          </Typography>
          {isMobileScreen ? (
            <IconButton color="inherit" onClick={toggleMobileMenu}>
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
          ) : (
            <Box>
              <Button sx={{ fontWeight: "bold", color: "black" }}>Home</Button>
              <Button sx={{ fontWeight: "bold", color: "black" }}>
                Services
              </Button>
              <Button sx={{ fontWeight: "bold", color: "black" }}>About</Button>
              <Button sx={{ fontWeight: "bold", color: "black" }}>
                Contact
              </Button>
            </Box>
          )}
        </Toolbar>
        <Drawer
          anchor="right"
          open={mobileMenuOpen}
          onClose={toggleMobileMenu}
          sx={{ display: { xs: "block", sm: "block", md: "none" } }}
        >
          <List>
            <ListItem button onClick={toggleMobileMenu}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={toggleMobileMenu}>
              <ListItemText primary="Services" />
            </ListItem>
            <ListItem button onClick={toggleMobileMenu}>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button onClick={toggleMobileMenu}>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Drawer>
      </AppBar>
    </Box>
  );
};

export default Navbar;

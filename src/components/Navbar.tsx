import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import Link from "next/link";

const navItems = [
  {
    avatar: "./navbar_icons/aboutus_icon_light.svg",
    href: "./about",
    label: "About Us",
  },
  {
    avatar: "./navbar_icons/cubifood_icon.svg",
    href: "./cubifood",
    label: "CubiFood",
  },
];

const Navbar: React.FC<{ window?: () => Window }> = ({ window }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} className={"navbarDrawer"}>
      <Box className={"navbarDrawerHeader"}>
        <Avatar
          className={"navbarLogo"}
          alt={"Cubitech"}
          src={"./cubitech_brands/cubitech_light.svg"}
          variant={"square"}
        />
      </Box>
      <Divider />
      <List>
        {navItems.map((nav, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton href={nav.href}>
              <Box className={"listItemButtonContainer"}>
                <Avatar
                  className={"navbarItemAvatar"}
                  src={nav.avatar}
                  alt={nav.label}
                  variant={"square"}
                />
                <ListItemText primary={nav.label} />
              </Box>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box className={"navbarContainer"}>
      <CssBaseline />
      <AppBar className={"navbarAppBar"} component={"nav"}>
        <Toolbar>
          <Link href={"/"}>
            <Avatar
              className={"avatarLogo"}
              alt={"Cubitech"}
              src={"./cubitech_brands/cubitech_dark.svg"}
              component={"div"}
              variant={"square"}
            />
          </Link>
          <Box flexGrow={1} />
          <IconButton
            color={"inherit"}
            size={"large"}
            edge={"end"}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          className={"navbarDrawerContainer"}
          container={window ? window().document.body : undefined}
          variant={"temporary"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navbar;

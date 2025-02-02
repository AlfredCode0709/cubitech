import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import Link from "next/link";
import LogoDark from "./LogoDark";
import MainMenu from "./MainMenu";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";
import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

const Navbar: React.FC = () => {
  const { user } = useUser();

  const [mainMenuAnchorEl, setMainMenuAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [userMenuAnchorEl, setUserMenuAnchorEl] = useState<null | HTMLElement>(
    null
  );

  const handleMainMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMainMenuAnchorEl(event.currentTarget);
  };

  const handleUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setUserMenuAnchorEl(event.currentTarget);
  };

  const handleCloseMainMenu = () => {
    setMainMenuAnchorEl(null);
  };

  const handleCloseUserMenu = () => {
    setUserMenuAnchorEl(null);
  };

  return (
    <Box className={"navbarContainer"}>
      <CssBaseline />
      <AppBar className={"appBar"} component={"nav"}>
        <Toolbar>
          <Link href={"/"}>
            <LogoDark />
          </Link>
          <SearchBar />
          <Box flexGrow={1} />
          {user ? (
            <Button
              startIcon={<AccountCircleIcon />}
              color={"inherit"}
              size={"large"}
              sx={{ marginRight: "1%" }}
              onClick={handleUserMenu}
            >
              {user.name && user.name.split(" ")[0]}
            </Button>
          ) : (
            <Button
              startIcon={<LoginIcon />}
              color={"inherit"}
              size={"large"}
              sx={{ marginRight: "1%" }}
              href={"/api/auth/login"}
            >
              Login
            </Button>
          )}
          <Tooltip title="Open main menu">
            <IconButton
              onClick={handleMainMenu}
              color={"inherit"}
              size={"large"}
              edge={"end"}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>
          <MainMenu
            anchorEl={mainMenuAnchorEl}
            handleClose={handleCloseMainMenu}
          />
          <UserMenu
            anchorEl={userMenuAnchorEl}
            handleClose={handleCloseUserMenu}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
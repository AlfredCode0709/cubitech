import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import Link from "next/link";
import LogoDark from "./LogoDark";
import MainMenu from "./MainMenu";
import SearchBar from "./SearchBar";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMainMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
          <Button
            startIcon={<LoginIcon />}
            color={"inherit"}
            size={'large'}
            sx={{ marginRight: "1%" }}
          >
            Login
          </Button>
          <Tooltip title="Open main menu">
            <IconButton onClick={handleMainMenu} color={'inherit'} size={'large'} edge={'end'}>
              <MenuIcon />
            </IconButton>
          </Tooltip>
          <MainMenu anchorEl={anchorEl} handleClose={handleClose} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

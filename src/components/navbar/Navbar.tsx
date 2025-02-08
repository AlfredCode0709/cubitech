import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import Link from "next/link";
import LogoDark from "./LogoDark";
import MainMenu from "./MainMenu";
import SearchBar from "./SearchBar";
import { FC, MouseEvent, useState } from "react";

const Navabr: FC<any> = () => {
  const [mainMenuAnchorEl, setMainMenuAnchorEl] = useState<null | HTMLElement>(
    null
  );

  const handleMainMenu = (event: MouseEvent<HTMLElement>) => {
    setMainMenuAnchorEl(event.currentTarget);
  };

  const handleCloseMainMenu = () => {
    setMainMenuAnchorEl(null);
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
            size={"large"}
            sx={{ marginRight: "1%" }}
            href={"#"}
          >
            Login
          </Button>
          <IconButton
            onClick={handleMainMenu}
            color={"inherit"}
            size={"large"}
            edge={"end"}
          >
            <MenuIcon />
          </IconButton>
          <MainMenu
            anchorEl={mainMenuAnchorEl}
            handleClose={handleCloseMainMenu}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navabr;

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import CubitechDark from "../CubitechDark";
import Link from "next/link";
import MainMenu from "./MainMenu";
import { FC, MouseEvent, useState } from "react";

const Navbar: FC = () => {
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
            <CubitechDark />
          </Link>
          <Box flexGrow={1} />
          <Box className={"buttonList"}>
            <IconButton
              onClick={handleMainMenu}
              color={"inherit"}
              size={"large"}
              edge={"end"}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
        <MainMenu
          anchorEl={mainMenuAnchorEl}
          handleClose={handleCloseMainMenu}
        />
      </AppBar>
    </Box>
  );
};

export default Navbar;

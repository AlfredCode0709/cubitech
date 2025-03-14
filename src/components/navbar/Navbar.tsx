import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import CubitechDark from "../CubitechDark";
import Link from "next/link";
import { FC } from "react";

const Navbar: FC<any> = () => {
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
            <IconButton color={"inherit"} size={"large"} edge={"end"}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

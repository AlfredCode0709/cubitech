import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import LogoDark from "./LogoDark";
import { FC } from "react";

const Navbar: FC<any> = () => {
  return (
    <Box className={"navbarContainer"}>
      <CssBaseline />
      <AppBar className={"appBar"} component={"nav"}>
        <Toolbar>
          <Link href={"/"}>
            <LogoDark />
          </Link>
          <Box flexGrow={1} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

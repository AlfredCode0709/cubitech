import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import LogoDark from "./LogoDark";
import MainMenu from "./MainMenu";
import SearchBar from "./SearchBar";
import { useCart } from "@/contexts/CartContext";
import { FC, MouseEvent, useState } from "react";

const Navbar: FC<any> = () => {
  const { state: cartState } = useCart();

  const [mainMenuAnchorEl, setMainMenuAnchorEl] = useState<null | HTMLElement>(
    null
  );

  const handleMainMenu = (event: MouseEvent<HTMLElement>) => {
    setMainMenuAnchorEl(event.currentTarget);
  };

  const handleCloseMainMenu = () => {
    setMainMenuAnchorEl(null);
  };

  const cartItemCount = cartState.items.length;

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
          <Box className={"buttonList"}>
            <IconButton color={"inherit"} size={"large"} href={"/shoppingcart"}>
              <Badge
                color={"error"}
                badgeContent={cartItemCount}
                invisible={cartItemCount === 0} // Hide badge if cart is empty
              >
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <Button
              startIcon={<LoginIcon />}
              color={"inherit"}
              size={"large"}
              href={"/auth/login"}
              disabled
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
          </Box>
          <MainMenu
            anchorEl={mainMenuAnchorEl}
            handleClose={handleCloseMainMenu}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

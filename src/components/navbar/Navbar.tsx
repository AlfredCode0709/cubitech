import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import LogoDark from "./LogoDark";
import MainMenu from "./MainMenu";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";
import { useUser } from "@auth0/nextjs-auth0";
import { FC, MouseEvent, useEffect, useState } from "react";
import { useCart } from "@/contexts/CartContext";

const Navbar: FC<any> = () => {
  const { user } = useUser();
  const { state: cartState } = useCart();

  const [mainMenuAnchorEl, setMainMenuAnchorEl] = useState<null | HTMLElement>(
    null,
  );

  const [userMenuAnchorEl, setUserMenuAnchorEl] = useState<null | HTMLElement>(
    null,
  );

  const handleMainMenu = (event: MouseEvent<HTMLElement>) => {
    setMainMenuAnchorEl(event.currentTarget);
  };

  const handleUserMenu = (event: MouseEvent<HTMLElement>) => {
    setUserMenuAnchorEl(event.currentTarget);
  };

  const handleCloseMainMenu = () => {
    setMainMenuAnchorEl(null);
  };

  const handleCloseUserMenu = () => {
    setUserMenuAnchorEl(null);
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
          <IconButton
            color={"inherit"}
            size={"large"}
            sx={{ marginRight: "1%" }}
            href={"/shoppingcart"}
          >
            <Badge
              color={"error"}
              badgeContent={cartItemCount}
              invisible={cartItemCount === 0} // Hide badge if cart is empty
            >
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          {user ? (
            <>
              <Button
                startIcon={<AccountCircleIcon />}
                color={"inherit"}
                size={"large"}
                sx={{ marginRight: "1%" }}
                onClick={handleUserMenu}
              >
                {user.name && user.name.split(" ")[0]}
              </Button>
            </>
          ) : (
            <Button
              startIcon={<LoginIcon />}
              color={"inherit"}
              size={"large"}
              sx={{ marginRight: "1%" }}
              href={"/auth/login"}
            >
              Login
            </Button>
          )}
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

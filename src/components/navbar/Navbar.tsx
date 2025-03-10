import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CubitechDark from "./CubitechDark";
import Link from "next/link";
import MainMenu from "./MainMenu";
import UserMenu from "./UserMenu";
import { useCart } from "@/contexts/CartContext";
import { useOrder } from "@/contexts/OrderContext";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
import { FC, MouseEvent, useState } from "react";

const Navbar: FC<any> = () => {
  const { user } = useUser();
  const router = useRouter();

  const { state: cartState } = useCart();
  const { state: orderState } = useOrder();

  const cartItems = [...cartState.cubiFoodItems, ...cartState.cubiMartItems];
  const cartItemCount = cartItems?.length;

  const orderItems = [...orderState.orderItems];
  const orderItemCount = orderItems?.length;

  const [mainMenuAnchorEl, setMainMenuAnchorEl] = useState<null | HTMLElement>(
    null,
  );

  const [userMenuAnchorEl, setUserMenuAnchorEl] = useState<null | HTMLElement>(
    null,
  );

  const handleMainMenu = (event: MouseEvent<HTMLElement>) => {
    setMainMenuAnchorEl(event.currentTarget);
  };

  const handleCloseMainMenu = () => {
    setMainMenuAnchorEl(null);
  };

  const handleUserMenu = (event: MouseEvent<HTMLElement>) => {
    setUserMenuAnchorEl(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setUserMenuAnchorEl(null);
  };

  return (
    <Box className={"navbarContainer"}>
      <CssBaseline />
      <AppBar
        className={"appBar"}
        component={"nav"}
        sx={{
          bgcolor: router.pathname.startsWith("/cubifood")
            ? "#08834e"
            : "primary.main",
        }}
      >
        <Toolbar>
          <Link href={"/"}>
            <CubitechDark />
          </Link>
          <Box flexGrow={1} />
          <Box className={"buttonList"}>
            {user ? (
              <Button
                startIcon={<AccountCircleIcon />}
                color={"inherit"}
                size={"large"}
                onClick={handleUserMenu}
              >
                {user?.name && user.name.split(" ")[0]}
              </Button>
            ) : (
              <Button
                startIcon={<LoginIcon />}
                color={"inherit"}
                size={"large"}
                href={"/auth/login"}
              >
                Login
              </Button>
            )}
            {orderItemCount > 0 && (
              <IconButton color={"inherit"} size={"large"} href={"/checkout"}>
                <ShoppingCartIcon />
              </IconButton>
            )}
            <IconButton color={"inherit"} size={"large"} href={"/cart"}>
              <Badge
                color={"error"}
                badgeContent={cartItemCount}
                invisible={cartItemCount === 0} // Hide badge if cart is empty
              >
                <ShoppingBasketIcon />
              </Badge>
            </IconButton>
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
        <UserMenu
          anchorEl={userMenuAnchorEl}
          handleClose={handleCloseUserMenu}
        />
      </AppBar>
    </Box>
  );
};

export default Navbar;

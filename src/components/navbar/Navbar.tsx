import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CubitechDark from "../CubitechDark";
import Link from "next/link";
import MainMenu from "./MainMenu";
import { useRouter } from "next/router";
import { FC, MouseEvent, useState } from "react";
import { useCart } from "@/contexts/CartContext";

const Navbar: FC = () => {
  const router = useRouter();

  const [mainMenuAnchorEl, setMainMenuAnchorEl] = useState<null | HTMLElement>(
    null
  );

  const handleMainMenu = (event: MouseEvent<HTMLElement>) => {
    setMainMenuAnchorEl(event.currentTarget);
  };

  const handleCloseMainMenu = () => {
    setMainMenuAnchorEl(null);
  };

  const { state } = useCart();

  const cartItems = [...state.cubiFoodItems, ...state.cubiMartItems];
  const cartItemCount = cartItems?.length;

  // console.log(state);

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
            <IconButton color={"inherit"} size={"large"} href={"/cart"}>
              <Badge
                color={"error"}
                badgeContent={cartItemCount}
                invisible={cartItemCount === 0}
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
      </AppBar>
    </Box>
  );
};

export default Navbar;

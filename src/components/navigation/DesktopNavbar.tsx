import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import DesktopMainMenu from "./DesktopMainMenu";
import Link from "next/link";
// import { BrandConfig } from "@/config/brandConfig";
import { FC, Fragment } from "react";
import CubitechLogo from "../CubitechLogo";

// interface DesktopNavbarProps {
//   brand: BrandConfig;
// }

// const DesktopNavbar: FC<DesktopNavbarProps> = ({ brand }) => {
const DesktopNavbar: FC = () => {
  //   const [mainMenuAnchorEl, setMainMenuAnchorEl] = useState<null | HTMLElement>(
  //     null
  //   );

  //   const handleMainMenu = (event: MouseEvent<HTMLElement>) => {
  //     setMainMenuAnchorEl(event.currentTarget);
  //   };

  //   const handleCloseMainMenu = () => {
  //     setMainMenuAnchorEl(null);
  //   };

  return (
    <Fragment>
      <CssBaseline />
      <AppBar className={"appBar"} component={"nav"}>
        <Toolbar>
          {/* <Link href={"/"}>{brand.darkLogo}</Link> */}
          <Link href={"/"}>
            <CubitechLogo colorMode={"dark"} />
          </Link>
          <Box flexGrow={1} />
          {/* <IconButton
            onClick={handleMainMenu}
            color={"inherit"}
            size={"large"}
            edge={"end"}
          >
            <MenuIcon />
          </IconButton> */}
          {/* <DesktopMainMenu
            anchorEl={mainMenuAnchorEl}
            handleClose={handleCloseMainMenu}
            brand={brand}
          /> */}
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default DesktopNavbar;

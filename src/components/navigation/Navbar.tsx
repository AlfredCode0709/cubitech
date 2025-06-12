import Box from "@mui/material/Box";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
// import { getBrandByPath } from "@/config/brandConfig";
// import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";

const Navbar: FC = () => {
  // const router = useRouter();
  // const brand = getBrandByPath(router.pathname);

  const style: CSSProperties = {
    // "--appBarBgColor": brand.appBarBgColor,
    "--appBarBgColor": "var(--primary-main)",
  } as CSSProperties;

  return (
    <Box className={"navbarContainer"} sx={style}>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <DesktopNavbar />
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <MobileNavbar />
      </Box>
    </Box>
  );
};

export default Navbar;

import Box from "@mui/material/Box";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";
import { getBrandByPath } from "@/config/brandConfig";
import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";

const Footer: FC = () => {
  const router = useRouter();
  const brand = getBrandByPath(router.pathname);

  const style: CSSProperties = {
    "--footerBgColor": brand.footerBgColor,
    "--hoverColor": brand.footerHoverColor,
  } as CSSProperties;

  return (
    <Box className={"footerContainer"} sx={style}>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <DesktopFooter />
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <MobileFooter />
      </Box>
    </Box>
  );
};

export default Footer;

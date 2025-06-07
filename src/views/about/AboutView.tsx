import Box from "@mui/material/Box";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import styles from "@/styles/about.module.scss";
import { FC } from "react";

const AboutView: FC = () => {
  return (
    <Box className={styles.about}>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <DesktopView />
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <MobileView />
      </Box>
    </Box>
  );
};

export default AboutView;

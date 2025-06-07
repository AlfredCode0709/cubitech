import Box from "@mui/material/Box";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import styles from "@/styles/dev.module.scss";
import { FC } from "react";

const DeveloperPortal: FC = () => {
  return (
    <Box className={styles.dev}>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <DesktopView />
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <MobileView />
      </Box>
    </Box>
  );
};

export default DeveloperPortal;

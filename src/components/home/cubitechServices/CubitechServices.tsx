import Box from "@mui/material/Box";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import styles from "@/styles/home.module.scss";
import { FC } from "react";

const CubitechServices: FC = () => {
  return (
    <Box className={styles.cubitechServices}>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <DesktopView />
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <MobileView />
      </Box>
    </Box>
  );
};

export default CubitechServices;

import Box from "@mui/material/Box";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import styles from "@/styles/404.module.scss";
import { FC } from "react";

const Error404: FC = () => {
  return (
    <Box className={styles.page404}>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <DesktopView />
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <MobileView />
      </Box>
    </Box>
  );
};

export default Error404;

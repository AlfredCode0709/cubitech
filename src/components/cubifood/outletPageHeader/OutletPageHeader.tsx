import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import OutletInfo from "./OutletInfo";
import OutletStatus from "./OutletStatus";
import styles from "@/styles/cubifood.module.scss";
import { FC } from "react";

const OutletPageHeader: FC = () => {
  return (
    <Box className={styles.outletPageHeader}>
      <Stack className={styles.outletData}>
        <OutletInfo />
        <OutletStatus />
      </Stack>
    </Box>
  );
};

export default OutletPageHeader;

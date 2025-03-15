import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import StoreActions from "./StoreActions";
import StoreInfo from "./StoreInfo";
import StoreStats from "./StoreStats";
import styles from "../../../styles/cubimart.module.scss";
import { FC } from "react";

const StorePageHeader: FC<any> = () => {
  return (
    <Box className={styles.storePageHeader}>
      <Stack className={styles.storeData}>
        <StoreInfo />

        <StoreStats />

        <StoreActions />
      </Stack>
    </Box>
  );
};

export default StorePageHeader;

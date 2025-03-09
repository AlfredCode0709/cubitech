import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import styles from "../../../styles/cubimart.module.scss";
import { FC } from "react";

const StoreInfo: FC = () => (
  <Stack className={styles.storeInfo}>
    <Avatar
      className={styles.avatar}
      alt="Outlet Logo"
      src="https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741347930/cubimart_icon_ohsez1.svg"
    />
    <Box className={styles.data}>
      <Typography className={styles.storeName}>Store Name</Typography>
      <Typography className={styles.storeUserName}>Store Username</Typography>
    </Box>
  </Stack>
);

export default StoreInfo;

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import styles from "../../../styles/cubifood.module.scss";
import { FC } from "react";

const OutletInfo: FC<any> = () => {
  return (
    <Stack className={styles.firstSection}>
      <Avatar
        className={styles.avatar}
        alt="Outlet Logo"
        src="https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741347930/cubifood_icon_wwe1ks.svg"
      />
      <Box className={styles.outletInfo}>
        <Typography className={styles.outletName}>Outlet Name</Typography>
        <Typography className={styles.outletAddress}>Outlet Address</Typography>
      </Box>
    </Stack>
  );
};

export default OutletInfo;

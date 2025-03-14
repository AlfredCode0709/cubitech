import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styles from "@/styles/cubifood.module.scss";
import { FC } from "react";

interface OutletRowHeaderProps {
  outletIndex: number;
}

const OutletRowHeader: FC<OutletRowHeaderProps> = ({ outletIndex }) => {
  return (
    <Stack className={styles.outletRowHeader}>
      <Stack className={styles.leftSection}>
        <Avatar
          className={styles.avatar}
          alt="Outlet Logo"
          src="https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741347930/cubifood_icon_wwe1ks.svg"
        />
        <Typography className={styles.outletName}>Outlet Name</Typography>
      </Stack>
      <Stack className={styles.rightSection}>
        <Typography className={styles.distance}>1.99 km</Typography>
        <IconButton
          className={styles.outletViewButton}
          href={`/cubifood/outlet/${outletIndex + 1}`}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default OutletRowHeader;

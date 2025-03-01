import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styles from "../../styles/cubifood.module.scss";
import { FC } from "react";

interface OutletHeaderProps {
  href: string;
}

const OutletHeader: FC<OutletHeaderProps> = ({ href }) => {
  return (
    <Stack className={styles.outletHeader}>
      <Stack className={styles.leftSection}>
        <Avatar
          className={styles.avatar}
          alt="Outlet Logo"
          src="/navbar_icons/cubifood_icon.svg"
        />
        <Typography className={styles.outletName}>Outlet Name</Typography>
      </Stack>
      <Stack className={styles.rightSection}>
        <Typography className={styles.distance}>1.99 km</Typography>
        <IconButton className={styles.outletViewButton} href={href}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default OutletHeader;

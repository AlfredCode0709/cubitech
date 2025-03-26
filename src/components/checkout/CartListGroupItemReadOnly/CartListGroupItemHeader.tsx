import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import styles from "@/styles/checkout.module.scss";
import { CSSProperties, FC } from "react";

interface CartListGroupItemHeaderProps {
  isCubiMart: boolean;
}

const CartListGroupItemHeader: FC<CartListGroupItemHeaderProps> = ({
  isCubiMart,
}) => {
  return (
    <Grid size={12}>
      <Stack className={styles.groupItemHeader}>
        <Avatar
          className={styles.avatar}
          alt="Group Item Name"
          src={
            isCubiMart
              ? "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741347930/cubimart_icon_ohsez1.svg"
              : "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741347930/cubifood_icon_wwe1ks.svg"
          }
        />
        <Typography
          className={styles.groupItemName}
          sx={
            {
              "--color": isCubiMart ? "var(--primary-main)" : "#08834e",
            } as CSSProperties
          }
        >
          Brand/Supplier Name
        </Typography>
      </Stack>
    </Grid>
  );
};

export default CartListGroupItemHeader;

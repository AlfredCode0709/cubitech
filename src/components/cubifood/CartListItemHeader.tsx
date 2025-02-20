import Avatar from "@mui/material/Avatar";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "../../styles/shoppingcart.module.scss";
import { FC } from "react";

const CartListItemHeader: FC<any> = () => {
  return (
    <Grid size={12} container className={styles.cartListItemHeader}>
      <Grid size={0.75}>
        <Checkbox />
      </Grid>
      <Grid size={10.5} className={styles.cartListSupplierData}>
        <Avatar
          className={styles.avatar}
          alt="Store / Outlet Name"
          src="/cubitech.svg"
        />
        <Typography>Store Name</Typography>
      </Grid>
      <Grid size={0.75}>
        <IconButton>
          <DeleteIcon color={"error"} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default CartListItemHeader;

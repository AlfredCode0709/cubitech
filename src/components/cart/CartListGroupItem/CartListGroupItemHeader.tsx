import Avatar from "@mui/material/Avatar";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "@/styles/cart.module.scss";
import { ChangeEvent, FC } from "react";

interface CartListGroupItemHeaderProps {
  isCubiMart: boolean;
  isChecked: boolean;
  onCheckboxChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onDeleteAll: () => void;
}

const CartListGroupItemHeader: FC<CartListGroupItemHeaderProps> = ({
  isCubiMart,
  isChecked,
  onCheckboxChange,
  onDeleteAll
}) => {
  return (
    <Grid size={12} container className={styles.header}>
      <Grid size={0.75}>
        <Checkbox checked={isChecked} onChange={onCheckboxChange} />
      </Grid>
      <Grid size={isChecked ? 10.5 : 11.25} className={styles.data}>
        <Avatar
          className={styles.avatar}
          alt="Group Item Name"
          src={
            isCubiMart
              ? "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741347930/cubimart_icon_ohsez1.svg"
              : "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741347930/cubifood_icon_wwe1ks.svg"
          }
        />
        <Typography>Brand/Supplier Name</Typography>
      </Grid>
      {isChecked && (
        <Grid size={0.75}>
          <IconButton>
            <DeleteIcon color={"error"} onClick={onDeleteAll}/>
          </IconButton>
        </Grid>
      )}
    </Grid>
  );
};

export default CartListGroupItemHeader;

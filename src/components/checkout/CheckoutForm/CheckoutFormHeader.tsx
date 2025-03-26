import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import styles from "@/styles/checkout.module.scss";
import { FC } from "react";

interface CheckoutFormHeaderProps {
  handleCancel: () => void;
}

const CheckoutFormHeader: FC<CheckoutFormHeaderProps> = ({ handleCancel }) => {
  return (
    <Stack className={styles.header}>
      <Typography className={styles.title}>Checkout</Typography>

      <IconButton onClick={handleCancel} color={"error"}>
        <CloseIcon />
      </IconButton>
    </Stack>
  );
};

export default CheckoutFormHeader;

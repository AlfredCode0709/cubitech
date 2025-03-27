import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import styles from "@/styles/checkout.module.scss";
import { FC } from "react";

interface CheckoutFormHeaderProps {
  handleCancel: () => void;
}

const CheckoutFormHeader: FC<CheckoutFormHeaderProps> = ({ handleCancel }) => {
  return (
    <Stack className={styles.header}>
      <Typography className={styles.title}>Checkout</Typography>

      <Button
        color={"error"}
        variant={"contained"}
        startIcon={<RemoveShoppingCartIcon />}
        onClick={handleCancel}
      >
        Cancel
      </Button>
    </Stack>
  );
};

export default CheckoutFormHeader;

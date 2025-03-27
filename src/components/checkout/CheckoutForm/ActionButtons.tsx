import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import styles from "@/styles/checkout.module.scss";
import { CheckoutFormValues } from "./CheckoutForm";
import { UseFormWatch } from "react-hook-form";
import { FC } from "react";

interface ActionButtonsProps {
  reset: () => void;
  watch: UseFormWatch<CheckoutFormValues>;
}

const ActionButtons: FC<ActionButtonsProps> = ({ reset, watch }) => {
  return (
    <Stack className={styles.actionButtons}>
      <Button
        color={"primary"}
        variant={"contained"}
        size={"large"}
        startIcon={<RestartAltIcon />}
        onClick={() => reset()}
        fullWidth
      >
        Reset
      </Button>
      <Button
        color={"primary"}
        variant={"contained"}
        size={"large"}
        startIcon={<ShoppingCartCheckoutIcon />}
        disabled={
          (!watch("deliveryMethod") ||
            !watch("consumeBy") ||
            !watch("collectBy")) &&
          !watch("paymentMethod")
        }
        type={"submit"}
        fullWidth
      >
        Checkout
      </Button>
    </Stack>
  );
};

export default ActionButtons;

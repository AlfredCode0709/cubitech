import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { FC } from "react";

interface CheckoutActionButtonsProps {
  handleReset: () => void;
}

const CheckoutActionButtons: FC<CheckoutActionButtonsProps> = ({
  handleReset,
}) => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        marginTop: "2.5%",
        gap: "16px",
      }}
    >
      <Button
        color={"primary"}
        variant={"contained"}
        size={"large"}
        startIcon={<RestartAltIcon />}
        onClick={handleReset}
        fullWidth
      >
        Reset
      </Button>
      <Button
        color={"primary"}
        variant={"contained"}
        size={"large"}
        startIcon={<ShoppingCartCheckoutIcon />}
        type={"submit"}
        fullWidth
      >
        Proceed to Checkout
      </Button>
    </Stack>
  );
};

export default CheckoutActionButtons;

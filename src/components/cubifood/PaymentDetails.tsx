import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import styles from "../../styles/shoppingcart.module.scss";
import { FC } from "react";
import { useCart } from "@/contexts/CartContext";
import { useOrder } from "@/contexts/OrderContext";
import { useRouter } from "next/router";

interface PaymentDetailsProps {
  subtotal: number;
}

const PaymentDetails: FC<PaymentDetailsProps> = ({ subtotal }) => {
  const { state: cartState, dispatch: cartDispatch } = useCart();
  const { dispatch: orderDispatch } = useOrder();
  const router = useRouter();

  const additionalCosts = 1.99;
  const discount = 0.15 * subtotal;
  const total = subtotal + additionalCosts - discount;

  const details = [
    { label: "Subtotal", value: subtotal },
    { label: "Additional Costs", value: additionalCosts },
    { label: "Discount (15%)", value: discount },
  ];

  const handleCheckout = () => {
    const orderData = {
      items: cartState.items,
      subtotal,
      additionalCosts,
      discount,
      total,
    };

    // Store in context and sessionStorage
    orderDispatch({ type: "SET_ORDER", payload: orderData });

    // Clear cart after checkout
    cartDispatch({ type: "CLEAR_CART" });

    // Redirect to checkout page
    router.push("/checkout");
  };

  return (
    <Box className={styles.paymentDetails}>
      {details.map(({ label, value }) => (
        <Stack key={label} className={styles.paymentDetailsLine}>
          <Typography>{label}</Typography>
          <Typography className={styles.price}>
            {label === "Discount"
              ? `-$${value.toFixed(2)}`
              : `$${value.toFixed(2)}`}
          </Typography>
        </Stack>
      ))}

      {/* <Stack className={styles.paymentDetailsLine}>
        <Typography className={styles._}>Voucher</Typography>
        <Typography className={styles.addButton}>ADD</Typography>
      </Stack> */}

      <Stack className={styles.totalAmount}>
        <Typography className={styles._}>Total</Typography>
        <Typography className={styles.price}>${total.toFixed(2)}</Typography>
      </Stack>

      <Button
        className={styles.checkoutButton}
        color={"primary"}
        variant={"contained"}
        size={"large"}
        startIcon={<ShoppingCartCheckoutIcon />}
        onClick={handleCheckout}
        fullWidth
      >
        Checkout
      </Button>
    </Box>
  );
};

export default PaymentDetails;

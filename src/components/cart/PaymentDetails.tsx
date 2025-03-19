import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import styles from "@/styles/cart.module.scss";
import { CubiFoodItem, CubiMartItem, useCart } from "@/contexts/CartContext";
import { useOrder } from "@/contexts/OrderContext";
import { useRouter } from "next/router";
import { FC } from "react";

interface PaymentDetailsProps {
  isCubiMart: boolean;
  items: CubiFoodItem[] | CubiMartItem[];
}

const PaymentDetails: FC<PaymentDetailsProps> = ({ isCubiMart, items }) => {
  const subtotal = items.reduce(
    (sum: number, item: CubiFoodItem | CubiMartItem) =>
      sum + item.price * item.quantity,
    0
  );

  const { state: cartState, dispatch: cartDispatch } = useCart();
  const { state: orderState, dispatch: orderDispatch } = useOrder();
  const router = useRouter();

  const cartItems = isCubiMart
    ? cartState.cubiMartItems
    : cartState.cubiFoodItems;

  const additionalCosts = 1.99;
  const discount = 0.15 * (subtotal + additionalCosts);
  const total = subtotal + additionalCosts - discount;

  const details = [
    { label: "Subtotal", value: subtotal },
    { label: "Additional Costs", value: additionalCosts },
    { label: "Discount (15%)", value: discount },
  ];

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      return;
    }

    const orderData = {
      cubiMart: isCubiMart
        ? {
            orderItems: cartState.cubiMartItems,
            subtotal,
            additionalCosts,
            discount,
            total,
          }
        : orderState.cubiMart,
      cubiFood: !isCubiMart
        ? {
            orderItems: cartState.cubiFoodItems,
            subtotal,
            additionalCosts,
            discount,
            total,
          }
        : orderState.cubiFood,
    };

    orderDispatch({ type: "ADD_ORDER", payload: orderData });

    cartDispatch({ type: "CLEAR_CART", isCubiMart });

    router.push("/checkout");
  };

  return (
    <Box className={styles.paymentDetails}>
      {details.map(({ label, value }) => (
        <Stack key={label} className={styles.paymentDetailsLine}>
          <Typography className={styles._}>{label}</Typography>
          <Typography className={styles.price}>
            {label === "Discount"
              ? `-$${value.toFixed(2)}`
              : `$${value.toFixed(2)}`}
          </Typography>
        </Stack>
      ))}

      <Stack className={styles.totalAmount}>
        <Typography className={styles._}>Total</Typography>
        <Typography className={styles.price}>${total.toFixed(2)}</Typography>
      </Stack>

      <Button
        className={styles.checkoutButton}
        color="primary"
        variant="contained"
        size="large"
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

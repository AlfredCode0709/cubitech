import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import styles from "@/styles/cart.module.scss";
import { useCart } from "@/contexts/CartContext";
import { useOrder } from "@/contexts/OrderContext";
import { useRouter } from "next/router";
// import { useUser } from "@auth0/nextjs-auth0";
import { FC } from "react";

interface PaymentDetailsProps {
  isCubiMart: boolean;
  items: any;
}

const PaymentDetails: FC<PaymentDetailsProps> = ({ isCubiMart, items }) => {
  // const { user } = useUser();

  const subtotal = items.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0
  );

  const { state: cartState, dispatch: cartDispatch } = useCart();
  const { state: orderState, dispatch: orderDispatch } = useOrder();
  const router = useRouter();

  /* Extract relevant cart items based on `isCubiMart` */
  const cartItems = isCubiMart
    ? cartState.cubiMartItems
    : cartState.cubiFoodItems;

  /* Calculate additional costs and discount */
  const additionalCosts = 1.99;
  const discount = 0.15 * (subtotal + additionalCosts);
  const total = subtotal + additionalCosts - discount;

  /* Order details array */
  const details = [
    { label: "Subtotal", value: subtotal },
    { label: "Additional Costs", value: additionalCosts },
    { label: "Discount (15%)", value: discount },
  ];

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      return; /* Don't proceed if no items in the cart */
    }

    /* Create order data based on cart type */
    // const orderData = isCubiMart
    //   ? {
    //       isCubiMart,
    //       orderItems: cartState.cubiMartItems,
    //       subtotal,
    //       additionalCosts,
    //       discount,
    //       total,
    //     }
    //   : {
    //       isCubiMart,
    //       orderItems: cartState.cubiFoodItems,
    //       subtotal,
    //       additionalCosts,
    //       discount,
    //       total,
    //     };

    /* Create order data */
    const orderData = {
      cubiMart: isCubiMart
        ? {
            orderItems: cartState.cubiMartItems,
            subtotal,
            additionalCosts,
            discount,
            total,
          }
        : orderState.cubiMart, // Preserve existing CubiMart order if not updating
      cubiFood: !isCubiMart
        ? {
            orderItems: cartState.cubiFoodItems,
            subtotal,
            additionalCosts,
            discount,
            total,
          }
        : orderState.cubiFood, // Preserve existing CubiFood order if not updating
    };

    /* Log and store order data in context */
    console.log(orderData);

    orderDispatch({ type: "SET_ORDER", payload: orderData });

    cartDispatch({ type: "CLEAR_CART", isCubiMart });

    /* Redirect to checkout page */
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
        // startIcon={user ? <ShoppingCartCheckoutIcon /> : <LoginIcon />}
        // onClick={handleCheckoutClick}
        startIcon={<ShoppingCartCheckoutIcon />}
        onClick={handleCheckout}
        fullWidth
      >
        {/* {user ? "Checkout" : "Login To Checkout"} */}
        Checkout
      </Button>
    </Box>
  );
};

export default PaymentDetails;

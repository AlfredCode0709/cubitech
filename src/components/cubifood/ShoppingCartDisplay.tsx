import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import CartListItem from "./CartListItem";
import PaymentDetails from "./PaymentDetails";
import styles from "../../styles/shoppingcart.module.scss";
import { FC } from "react";

interface ShoppingCartDisplayProps {
  items: any[];
  dispatch: any;
}

const ShoppingCartDisplay: FC<ShoppingCartDisplayProps> = ({
  items,
  dispatch,
}) => {
  console.log(items);

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handleEmptyCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <>
      <Stack className={styles.header}>
        <Stack>
          <Typography className={styles.title}>Shopping Cart</Typography>
          <Typography className={styles.itemNumber}>
            {totalQuantity} {totalQuantity > 0 ? "item(s)" : "item"}
          </Typography>
        </Stack>
        <Stack>
          <Button
            color={"error"}
            variant={"contained"}
            size={"large"}
            startIcon={<RemoveShoppingCartIcon />}
            onClick={handleEmptyCart}
          >
            Empty Cart
          </Button>
        </Stack>
      </Stack>
      <Grid container spacing={2} className={styles.cartData}>
        <Grid size={8.5}>
          {items.map((item) => (
            <CartListItem key={item.cartId} item={item} />
          ))}
        </Grid>
        <Grid size={3.5}>
          <PaymentDetails subtotal={subtotal} />
        </Grid>
      </Grid>
    </>
  );
};

export default ShoppingCartDisplay;

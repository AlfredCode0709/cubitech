import Grid from "@mui/material/Grid2";
import CartListItem from "./CartListItem";
import PaymentDetails from "./PaymentDetails";
import styles from "../../styles/shoppingcart.module.scss";
import { FC } from "react";

interface ShoppingCartDataProps {
  items: any[];
  subtotal: number;
}

const ShoppingCartData: FC<ShoppingCartDataProps> = ({ items, subtotal }) => {
  return (
    <Grid container spacing={2} className={styles.cartData}>
      <Grid size={8.5} container>
        {items.map((item) => (
          <CartListItem key={item.cartId} item={item} />
        ))}
      </Grid>
      <Grid size={3.5}>
        <PaymentDetails subtotal={subtotal} />
      </Grid>
    </Grid>
  );
};

export default ShoppingCartData;

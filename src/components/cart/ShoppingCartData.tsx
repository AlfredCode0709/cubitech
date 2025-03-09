import Grid from "@mui/material/Grid2";
import CartListItem from "./CartListItem";
import PaymentDetails from "./PaymentDetails";
import styles from "../../styles/cart.module.scss";
import { FC } from "react";

interface ShoppingCartDataProps {
  isCubiMart: boolean;
  items: any[];
}

const ShoppingCartData: FC<ShoppingCartDataProps> = ({
  isCubiMart,
  items,
}) => {
  console.log(items);

  return (
    <Grid container spacing={2} className={styles.cartData}>
      <Grid size={8.5} container>
        {items.map((item) => (
          <CartListItem isCubiMart={isCubiMart} key={item.cartId} item={item} />
        ))}
      </Grid>
      <Grid size={3.5}>
        <PaymentDetails isCubiMart={isCubiMart} items={items} />
      </Grid>
    </Grid>
  );
};

export default ShoppingCartData;

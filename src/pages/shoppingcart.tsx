import Box from "@mui/material/Box";
import Head from "next/head";
import EmptyCartDisplay from "@/components/cubifood/EmptyCartDisplay";
import ShoppingCartDisplay from "@/components/cubifood/ShoppingCartDisplay";
import MoreItemsData from "@/components/cubifood/MoreItemsData";
import styles from "../styles/shoppingcart.module.scss";
import { useCart } from "@/contexts/CartContext";
import { FC } from "react";

const ShoppingCart: FC<any> = () => {
  const { state, dispatch } = useCart();

  const items = state.items;

  return (
    <>
      <Head>
        <title>Shopping Cart | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cubitech.ico" />
      </Head>
      <main>
        <Box className={styles.shoppingCart}>
          {state.items.length > 0 ? (
            <ShoppingCartDisplay dispatch={dispatch} items={items} />
          ) : (
            <EmptyCartDisplay />
          )}
        </Box>

        {/* Set Shopping Cart to CubiFood first */}
        <MoreItemsData TOTAL_ITEMS={20} />
      </main>
    </>
  );
};

export default ShoppingCart;

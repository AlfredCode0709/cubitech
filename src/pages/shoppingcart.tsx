import Box from "@mui/material/Box";
import Head from "next/head";
import ShoppingCartDisplay from "@/components/cubifood/ShoppingCartDisplay";
import EmptyCartDisplay from "@/components/common/EmptyCartDisplay";
import Toggle from "@/components/shoppingcart/Toggle";
import styles from "../styles/shoppingcart.module.scss";
import { useCart } from "@/contexts/CartContext";
import { FC, useState } from "react";

const ShoppingCart: FC<any> = () => {
  const { state, dispatch } = useCart();
  const items = state.items;

  const [isCubiFood, setIsCubiFood] = useState(false);

  return (
    <>
      <Head>
        <title>Shopping Cart | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dcsfz2ydj/image/upload/v1739968314/cubitech_pv5rz0.ico"
        />
      </Head>
      <main>
        <Box className={styles.shoppingCart}>
          <Toggle isCubiFood={isCubiFood} setIsCubiFood={setIsCubiFood} />

          {state.items.length > 0 ? (
            !isCubiFood ? (
              <ShoppingCartDisplay dispatch={dispatch} items={items} />
            ) : (
              <EmptyCartDisplay
                imageSrc={
                  isCubiFood
                  ? "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1740469687/cubimart_emptycart_icon_cbhh4u.svg"
                  : "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1740135701/cubifood_emptycart_icon_ku3pne.svg"
                }
                shopLink={isCubiFood ? "/cubifood" : "/cubimart"}
              />
            )
          ) : (
            <EmptyCartDisplay
              imageSrc={
                isCubiFood
                  ? "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1740469687/cubimart_emptycart_icon_cbhh4u.svg"
                  : "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1740135701/cubifood_emptycart_icon_ku3pne.svg"
              }
              shopLink={isCubiFood ? "/cubifood" : "/cubimart"}
            />
          )}
        </Box>
      </main>
    </>
  );
};

export default ShoppingCart;

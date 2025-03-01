import CartView from "@/components/view/shoppingcart/CartView";
import Head from "next/head";
import { useCart } from "@/contexts/CartContext";
import { FC, useState } from "react";

const ShoppingCart: FC<any> = () => {
  const { state, dispatch } = useCart();

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
        <CartView state={state} dispatch={dispatch} isCubiFood={isCubiFood} setIsCubiFood={setIsCubiFood} />
      </main>
    </>
  );
};

export default ShoppingCart;

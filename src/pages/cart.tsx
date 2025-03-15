import Head from "next/head";
import { useCart } from "@/contexts/CartContext";
import { FC, Fragment, useState } from "react";
import CartView from "@/view/cart/CartView";

const Cart: FC<any> = () => {
  const [isCubiMart, setIsCubiMart] = useState(true);

  const { state, dispatch } = useCart();

  return (
    <Fragment>
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
        <CartView
          state={state}
          dispatch={dispatch}
          isCubiMart={isCubiMart}
          setIsCubiMart={setIsCubiMart}
        />
      </main>
    </Fragment>
  );
};

export default Cart;

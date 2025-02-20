import Box from "@mui/material/Box";
import Head from "next/head";
import styles from "../styles/checkout.module.scss";
import { useOrder } from "@/contexts/OrderContext";
import { FC } from "react";

const Checkout: FC<any> = () => {
  const { state } = useOrder();

  console.log(state);

  return (
    <>
      <Head>
        <title>Checkout | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cubitech.ico" />
      </Head>
      <main>
        <Box className={styles.checkout}></Box>
      </main>
    </>
  );
};

export default Checkout;

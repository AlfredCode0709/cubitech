import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Head from "next/head";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import PaymentDetailsReadOnly from "@/components/checkout/PaymentDetailsReadOnly";
import styles from "../styles/checkout.module.scss";
import { FC } from "react";
import { useOrder } from "@/contexts/OrderContext";

const Checkout: FC<any> = () => {
  const { state } = useOrder();

  const items = state?.items;
  const subtotal = state?.subtotal;

  return (
    <>
      <Head>
        <title>Checkout | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dcsfz2ydj/image/upload/v1739968314/cubitech_pv5rz0.ico"
        />
      </Head>
      <main>
        <Box className={styles.checkout}>
          <Grid container spacing={2}>
            <Grid size={7}>
              <CheckoutForm items={items} />
            </Grid>
            <Grid size={5}>
              <PaymentDetailsReadOnly subtotal={subtotal} />
            </Grid>
          </Grid>
        </Box>
      </main>
    </>
  );
};

export default Checkout;

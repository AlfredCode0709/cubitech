import CheckoutView from "@/view/checkout/CheckoutView";
import Head from "next/head";
import { FC, Fragment } from "react";

const Checkout: FC = () => {
  return (
    <Fragment>
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
        <CheckoutView />
      </main>
    </Fragment>
  );
};

export default Checkout;

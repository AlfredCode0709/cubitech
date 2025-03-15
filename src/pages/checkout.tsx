import dynamic from "next/dynamic";
import Head from "next/head";
import { useOrder } from "@/contexts/OrderContext";
import { FC, Fragment } from "react";

const Checkout: FC<any> = () => {
  const { state } = useOrder();

  const CheckoutView = dynamic(() => import("@/view/checkout/CheckoutView"), {
    ssr: false, // Ensures it's only rendered on the client
  });

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
        <CheckoutView state={state} />
      </main>
    </Fragment>
  );
};

export default Checkout;

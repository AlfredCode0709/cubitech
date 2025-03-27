import PaymentCancelledView from "@/view/checkout/PaymentCancelledView";
import Head from "next/head";
import { FC } from "react";

const PaymentCancelled: FC = () => {
  return (
    <>
      <Head>
        <title>Payment Cancelled</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dcsfz2ydj/image/upload/v1739968314/cubitech_pv5rz0.ico"
        />
      </Head>
      <main>
        <PaymentCancelledView />
      </main>
    </>
  );
};

export default PaymentCancelled;

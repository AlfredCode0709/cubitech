import PaymentSuccessView from "@/view/checkout/PaymentSuccessView";
import Head from "next/head";
import { FC } from "react";

const PaymentSuccess: FC = () => {
  return (
    <>
      <Head>
        <title>Payment Success</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dcsfz2ydj/image/upload/v1739968314/cubitech_pv5rz0.ico"
        />
      </Head>
      <main>
        <PaymentSuccessView />
      </main>
    </>
  );
};

export default PaymentSuccess;

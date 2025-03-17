import Default from "@/view/cubipay/Default";
import Head from "next/head";
import { FC, Fragment } from "react";

const CubiPay: FC = () => {
  return (
    <Fragment>
      <Head>
        <title>CubiPay | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dcsfz2ydj/image/upload/v1739968424/cubipay_lgerbd.ico"
        />
      </Head>
      <main>
        <Default />
      </main>
    </Fragment>
  );
};

export default CubiPay;

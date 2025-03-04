import Default from "@/view/cubipay/Default";
import Head from "next/head";
import { FC } from "react";

const CubiPay: FC<any> = () => {
  return (
    <>
      <Head>
        <title>CubiPay | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cubipay.ico" />
      </Head>
      <main>
        <Default />
      </main>
    </>
  );
};

export default CubiPay;

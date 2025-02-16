import Default from "@/components/view/cubipay/Default";
import Logged from "@/components/view/cubipay/Logged";
import Head from "next/head";
import { useUser } from "@auth0/nextjs-auth0";
import { FC } from "react";

const CubiPay: FC<any> = () => {
  const { user } = useUser();

  return (
    <>
      <Head>
        <title>CubiPay | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cubipay.ico" />
      </Head>
      <main>{user ? <Logged /> : <Default />}</main>
    </>
  );
};

export default CubiPay;

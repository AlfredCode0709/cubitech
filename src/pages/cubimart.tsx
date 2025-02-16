import Default from "@/components/view/cubimart/Default";
import Logged from "@/components/view/cubimart/Logged";
import Head from "next/head";
import { useUser } from "@auth0/nextjs-auth0";
import { FC } from "react";

const CubiMart: FC<any> = () => {
  const { user } = useUser();

  return (
    <>
      <Head>
        <title>CubiMart | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cubimart.ico" />
      </Head>
      <main>{user ? <Logged /> : <Default />}</main>
    </>
  );
};

export default CubiMart;

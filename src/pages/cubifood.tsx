import Default from "@/components/view/cubifood/Default";
import Logged from "@/components/view/cubifood/Logged";
import Head from "next/head";
import { useUser } from "@auth0/nextjs-auth0";
import { FC } from "react";

const CubiFood: FC<any> = () => {
  const { user } = useUser();

  return (
    <>
      <Head>
        <title>CubiFood | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cubifood.ico" />
      </Head>
      <main>{user ? <Logged /> : <Default />}</main>
    </>
  );
};

export default CubiFood;

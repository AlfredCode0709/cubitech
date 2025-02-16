import Default from "@/components/view/cubiride/Default";
import Logged from "@/components/view/cubiride/Logged";
import Head from "next/head";
import { useUser } from "@auth0/nextjs-auth0";
import { FC } from "react";

const CubiRide: FC<any> = () => {
  const { user } = useUser();

  return (
    <>
      <Head>
        <title>CubiRide | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cubiride.ico" />
      </Head>
      <main>{user ? <Logged /> : <Default />}</main>
    </>
  );
};

export default CubiRide;

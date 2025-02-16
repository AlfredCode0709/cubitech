import Default from "@/components/view/cubiperk/Default";
import Logged from "@/components/view/cubiperk/Logged";
import Head from "next/head";
import { useUser } from "@auth0/nextjs-auth0";
import { FC } from "react";

const CubiPerk: FC<any> = () => {
  const { user } = useUser();

  return (
    <>
      <Head>
        <title>CubiPerk | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cubiperk.ico" />
      </Head>
      <main>{user ? <Logged /> : <Default />}</main>
    </>
  );
};

export default CubiPerk;

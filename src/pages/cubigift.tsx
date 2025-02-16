import Default from "@/components/view/cubigift/Default";
import Logged from "@/components/view/cubigift/Logged";
import Head from "next/head";
import { useUser } from "@auth0/nextjs-auth0";
import { FC } from "react";

const CubiGift: FC<any> = () => {
  const { user } = useUser();

  return (
    <>
      <Head>
        <title>CubiGift | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cubigift.ico" />
      </Head>
      <main>{user ? <Logged /> : <Default />}</main>
    </>
  );
};

export default CubiGift;

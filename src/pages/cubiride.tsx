import Default from "@/view/cubiride/Default";
import Head from "next/head";
import { FC } from "react";

const CubiRide: FC<any> = () => {
  return (
    <>
      <Head>
        <title>CubiRide | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cubiride.ico" />
      </Head>
      <main>
        <Default />
      </main>
    </>
  );
};

export default CubiRide;

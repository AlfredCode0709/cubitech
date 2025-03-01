import Catalog from "@/components/view/cubifood/outlet/_";
import Head from "next/head";
import { FC } from "react";

const OutletCatalogue: FC<any> = () => {
  return (
    <>
      <Head>
        <title>Outlet Catalogue | CubiFood</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cubifood.ico" />
      </Head>
      <main>
        <Catalog />
      </main>
    </>
  );
};

export default OutletCatalogue;

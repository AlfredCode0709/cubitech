import Catalog from "@/view/cubimart/store/Catalog";
import Head from "next/head";
import { FC, Fragment } from "react";

const StoreCatalogue: FC = () => {
  return (
    <Fragment>
      <Head>
        <title>Store Catalogue | CubiMart</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dcsfz2ydj/image/upload/v1739968424/cubimart_vygwia.ico"
        />
      </Head>
      <main>
        <Catalog />
      </main>
    </Fragment>
  );
};

export default StoreCatalogue;

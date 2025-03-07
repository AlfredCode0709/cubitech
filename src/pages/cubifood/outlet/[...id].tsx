import Catalog from "@/view/cubifood/outlet/Catalog";
import Head from "next/head";
import { FC, Fragment } from "react";

const OutletCatalogue: FC<any> = () => {
  return (
    <Fragment>
      <Head>
        <title>Outlet Catalogue | CubiFood</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dcsfz2ydj/image/upload/v1739968423/cubifood_xnltgt.ico"
        />
      </Head>
      <main>
        <Catalog />
      </main>
    </Fragment>
  );
};

export default OutletCatalogue;

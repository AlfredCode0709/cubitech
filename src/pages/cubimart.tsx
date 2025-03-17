import Default from "@/view/cubimart/Default";
import Head from "next/head";
import { FC, Fragment } from "react";

const CubiMart: FC = () => {
  return (
    <Fragment>
      <Head>
        <title>CubiMart | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dcsfz2ydj/image/upload/v1739968424/cubimart_vygwia.ico"
        />
      </Head>
      <main>
        <Default />
      </main>
    </Fragment>
  );
};

export default CubiMart;

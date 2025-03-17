import Default from "@/view/cubifood/Default";
import Head from "next/head";
import { FC, Fragment } from "react";

const CubiFood: FC = () => {
  return (
    <Fragment>
      <Head>
        <title>CubiFood | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dcsfz2ydj/image/upload/v1739968423/cubifood_xnltgt.ico"
        />
      </Head>
      <main>
        <Default />
      </main>
    </Fragment>
  );
};

export default CubiFood;

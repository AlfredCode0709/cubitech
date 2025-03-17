import Default from "@/view/cubiride/Default";
import Head from "next/head";
import { FC, Fragment } from "react";

const CubiRide: FC = () => {
  return (
    <Fragment>
      <Head>
        <title>CubiRide | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dcsfz2ydj/image/upload/v1739968425/cubiride_x93bvn.ico"
        />
      </Head>
      <main>
        <Default />
      </main>
    </Fragment>
  );
};

export default CubiRide;

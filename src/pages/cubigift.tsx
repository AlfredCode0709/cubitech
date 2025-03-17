import Default from "@/view/cubigift/Default";
import Head from "next/head";
import { FC, Fragment } from "react";

const CubiGift: FC = () => {
  return (
    <Fragment>
      <Head>
        <title>CubiGift | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dcsfz2ydj/image/upload/v1739968424/cubigift_fnoqgq.ico"
        />
      </Head>
      <main>
        <Default />
      </main>
    </Fragment>
  );
};

export default CubiGift;

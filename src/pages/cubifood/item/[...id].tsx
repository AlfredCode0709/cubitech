import ItemData from "@/components/common/itemData/ItemData";
import Head from "next/head";
import { FC, Fragment } from "react";

const ItemView: FC = () => {
  return (
    <Fragment>
      <Head>
        <title>Item View | CubiFood</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dcsfz2ydj/image/upload/v1739968423/cubifood_xnltgt.ico"
        />
      </Head>
      <main>
        <ItemData isCubiMart={false} />
      </main>
    </Fragment>
  );
};

export default ItemView;

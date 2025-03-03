import Head from "next/head";
import ItemData from "@/components/common/ItemData";
import MoreItemsDrawer from "@/components/common/MoreItemsDrawer";
import { FC } from "react";

const ItemView: FC<any> = () => {
  return (
    <>
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
        {/* Item Data */}
        <ItemData />

        {/* More Items Drawer */}
        <MoreItemsDrawer totalItems={18} brand={"CUBIFood"} />
      </main>
    </>
  );
};

export default ItemView;

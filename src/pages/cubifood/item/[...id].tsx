import Head from "next/head";
import ItemData from "@/components/cubifood/ItemData";
import MoreItemsData from "@/components/cubifood/MoreItemsData";
import { FC } from "react";

const ItemView: FC<any> = () => {
  return (
    <>
      <Head>
        <title>Item View | CubiFood</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cubifood.ico" />
      </Head>
      <main>
        {/* Item Data */}
        <ItemData />

        {/* More Items Data */}
        <MoreItemsData TOTAL_ITEMS={18} />
      </main>
    </>
  );
};

export default ItemView;

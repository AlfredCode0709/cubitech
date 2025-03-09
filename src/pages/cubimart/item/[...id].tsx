import MoreItemsDrawer from "@/components/common/MoreItemsDrawer";
import Head from "next/head";
import dynamic from "next/dynamic";
import { FC, Fragment } from "react";

const ItemView: FC<any> = () => {
  const ItemData = dynamic(
    () => import("@/components/common/itemData/ItemData"),
    {
      ssr: false, // Ensures it's only rendered on the client
    }
  );
  
  return (
    <Fragment>
      <Head>
        <title>Item View | CubiFood</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dcsfz2ydj/image/upload/v1739968424/cubimart_vygwia.ico"
        />
      </Head>
      <main>
        {/* Item Data */}
        <ItemData isCubiMart={true} />

        {/* More Items Drawer */}
        <MoreItemsDrawer totalItems={18} brand={"CUBIMart"} />
      </main>
    </Fragment>
  );
};

export default ItemView;

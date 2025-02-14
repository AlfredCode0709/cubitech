import Box from "@mui/material/Box";
import Head from "next/head";
import StoreFilter from "@/components/cubimart/StoreFilter";
import StorePageHeader from "@/components/cubimart/StorePageHeader";
import CategoryListDisplay from "@/components/cubimart/CategoryListDisplay";
import CategoryMenu from "@/components/cubimart/CategoryMenu";
import styles from "../../../styles/cubimart.module.scss";
import { FC, useState } from "react";

const StoreCatalogue: FC<any> = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleSelectOption = (stallId: number | null) => {
    setSelectedOption(stallId);
  };

  const numberOfCategories = 14;

  return (
    <>
      <Head>
        <title>Store Catalogue | CubiMart</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cubitech.ico" />
      </Head>
      <main>
        {/* Starting block of Store Catalogue page */}
        <Box className={styles.storePageCover} />

        {/* Store Page header */}
        <StorePageHeader />

        {/* Store Filter */}
        <StoreFilter
          selectedOption={selectedOption}
          onSelectedOption={handleSelectOption}
          numberOfCategories={numberOfCategories}
        />

        {selectedOption === null ? (
          <CategoryListDisplay
            onSelectCategory={handleSelectOption}
            numberOfCategories={numberOfCategories}
          />
        ) : (
          <CategoryMenu categoryId={selectedOption} numberOfItems={20} />
        )}
      </main>
    </>
  );
};

export default StoreCatalogue;

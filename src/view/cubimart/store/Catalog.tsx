import Box from "@mui/material/Box";
import CategoryListDisplay from "@/components/cubimart/CategoryListDisplay";
import CategoryMenu from "@/components/cubimart/CategoryMenu";
import StoreFilter from "@/components/cubimart/StoreFilter/StoreFilter";
import StorePageHeader from "@/components/cubimart/StorePageHeader/StorePageHeader";
import styles from "../../../styles/cubimart.module.scss";
import { FC, Fragment, useState } from "react";

const Catalog: FC<any> = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleSelectOption = (stallId: number | null) => {
    setSelectedOption(stallId);
  };

  const numberOfCategories = 14;

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Catalog;

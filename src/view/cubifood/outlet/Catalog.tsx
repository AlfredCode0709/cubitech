import Box from "@mui/material/Box";
import OutletFilter from "@/components/cubifood/outletFilter/OutletFilter";
import OutletPageHeader from "@/components/cubifood/outletPageHeader/OutletPageHeader";
import StallListDisplay from "@/components/cubifood/StallListDisplay";
import StallMenu from "@/components/cubifood/StallMenu";
import styles from "../../../styles/cubifood.module.scss";
import { FC, Fragment, useState } from "react";

const Catalog: FC = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleSelectOption = (stallId: number | null) => {
    setSelectedOption(stallId);
  };

  const numberOfStalls = 14;

  return (
    <Fragment>
      {/* Starting block of Outlet Catalogue page */}
      <Box className={styles.outletPageCover} />

      {/* Outlet Page header */}
      <OutletPageHeader />

      {/* Outlet Filter */}
      <OutletFilter
        selectedOption={selectedOption}
        onSelectedOption={handleSelectOption}
        numberOfStalls={numberOfStalls}
      />

      {selectedOption === null ? (
        <StallListDisplay
          onSelectStall={handleSelectOption}
          numberOfStalls={numberOfStalls}
        />
      ) : (
        <StallMenu stallId={selectedOption} numberOfItems={20} />
      )}
    </Fragment>
  );
};

export default Catalog;

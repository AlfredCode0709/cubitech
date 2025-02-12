import Box from "@mui/material/Box";
import OutletFilter from "@/components/cubifood/OutletFilter";
import OutletPageHeader from "@/components/cubifood/OutletPageHeader";
import StallListDisplay from "@/components/cubifood/StallListDisplay";
import StallMenu from "@/components/cubifood/StallMenu";
import Head from "next/head";
import styles from "../../../styles/cubifood.module.scss";
import { FC, useState } from "react";

const OutletCatalogue: FC<any> = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleSelectOption = (stallId: number | null) => {
    setSelectedOption(stallId);
  };

  const numberOfStalls = 14;

  return (
    <>
      <Head>
        <title>Outlet Catalogue | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cubitech.ico" />
      </Head>
      <main>
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
      </main>
    </>
  );
};

export default OutletCatalogue;

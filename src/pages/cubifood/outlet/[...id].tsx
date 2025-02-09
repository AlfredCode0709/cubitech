import Box from "@mui/material/Box";
import OutletFilter from "@/components/cubifood/OutletFilter";
import OutletPageContent from "@/components/cubifood/OutletPageContent";
import StallListDisplay from "@/components/cubifood/StallListDisplay";
import StallMenu from "@/components/cubifood/StallMenu";
import Head from "next/head";
import { FC, useState } from "react";
import styles from "../../../styles/cubifood.module.scss";

const OutletCatalogue: FC<any> = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleSelectOption = (stallId: number | null) => {
    setSelectedOption(stallId);
  };

  const numberOfStalls = 10;

  const numberOfItems = 20;

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

        {/* Outlet Page content */}
        <OutletPageContent />

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
          <StallMenu stallId={selectedOption} numberOfItems={numberOfItems} />
        )}
      </main>
    </>
  );
};

export default OutletCatalogue;

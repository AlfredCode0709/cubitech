import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import ItemCard from "./card/ItemCard";
import PaginationVariant1 from "../common/pagination/PaginationVariant1";
import commonStyles from "@/styles/common.module.scss";
import { useRouter } from "next/router";
import { FC, useState } from "react";

interface FilteredCatalogueProps {
  imageSrc: string;
  numberOfStalls: number | 0;
  numberOfItems: number | 0;
}

const itemsPerPage = 12;

const FilteredCatalogue: FC<FilteredCatalogueProps> = ({
  imageSrc,
  numberOfStalls,
  numberOfItems,
}) => {
  const router = useRouter();
  const isCubiFood = router.pathname.startsWith("/cubifood");
  const numberSwitch = isCubiFood ? numberOfStalls : numberOfItems;

  const [currentPage, setCurrentPage] = useState(1);

  /* Total items and paginated data */
  const totalPages = Math.ceil(numberSwitch / itemsPerPage);

  const paginatedItems = Array.from(
    {
      length: Math.min(
        itemsPerPage,
        numberSwitch - (currentPage - 1) * itemsPerPage,
      ),
    },
    (_, i) => (currentPage - 1) * itemsPerPage + i + 1,
  );

  return (
    <Box className={commonStyles.filteredCatalogue}>
      {/* Pagination Buttons */}
      {totalPages > 1 && (
        <PaginationVariant1
          className={
            isCubiFood
              ? commonStyles.iconButtonVariant1
              : commonStyles.iconButtonVariant2
          }
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )}

      <Grid container className={commonStyles.catalogueView} spacing={0.5}>
        {paginatedItems.map((globalIndex) => (
          <Grid size={2} key={globalIndex}>
            {isCubiFood ? (
              <ItemCard
                href={`/cubifood/outlet/${globalIndex}`}
                imageSrc={imageSrc}
                name={`Shop Name ${globalIndex}`}
                price={0}
                haveChip={true}
                isCUBIMart={false}
                otherText={false}
                onClick={() => {}}
              />
            ) : (
              <ItemCard
                // href={`/cubimart/item/${globalIndex}`}
                href={`#`}
                imageSrc={imageSrc}
                name={`Item Name ${globalIndex}`}
                price={9.99}
                haveChip={false}
                isCUBIMart={true}
                otherText={false}
                onClick={() => {}}
              />
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FilteredCatalogue;

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import ItemCard from "./ItemCard";
import PaginationVariant1 from "../common/PaginationVariant1";
import commonStyles from "../../styles/common.module.scss";
import { FC, useState } from "react";

interface FilteredCatalogueProps {
  imageSrc: string;
  numberOfStalls: number;
}

const itemsPerPage = 12;

const FilteredCatalogue: FC<FilteredCatalogueProps> = ({
  imageSrc,
  numberOfStalls,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  /* Total items and paginated data */
  const totalPages = Math.ceil(numberOfStalls / itemsPerPage);

  const paginatedItems = Array.from(
    {
      length: Math.min(
        itemsPerPage,
        numberOfStalls - (currentPage - 1) * itemsPerPage,
      ),
    },
    (_, i) => (currentPage - 1) * itemsPerPage + i + 1,
  );

  return (
    <Box className={commonStyles.filteredCatalogue}>
      {/* Pagination Buttons */}
      {totalPages > 1 && (
        <PaginationVariant1
          className={commonStyles.iconButtonVariant1}
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )}

      <Grid container className={commonStyles.catalogueView} spacing={0.5}>
        {paginatedItems.map((globalIndex) => (
          <Grid size={2} key={globalIndex}>
            <ItemCard
              href={`/cubifood/outlet/${globalIndex}`}
              imageSrc={imageSrc}
              name={`Shop Name ${globalIndex}`}
              price={0}
              haveChip={true}
              isCUBIMart={false} 
              onClick={() => {}}           
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FilteredCatalogue;

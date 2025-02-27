import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import PaginationVariant1 from "../common/PaginationVariant1";
import commonStyles from "../../styles/common.module.scss";
import styles from "../../styles/cubifood.module.scss";
import { FC, useState } from "react";
import CatalogueItemCard from "../common/CatalogueItemCard";

interface StallListDisplayProps {
  onSelectStall: (stallId: number) => void;
  numberOfStalls: number;
}

const ITEMS_PER_PAGE = 12;

const StallListDisplay: FC<StallListDisplayProps> = ({
  onSelectStall,
  numberOfStalls,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  /* Total items and paginated data */
  const totalPages = Math.ceil(numberOfStalls / ITEMS_PER_PAGE);

  const paginatedItems = Array.from(
    {
      length: Math.min(
        ITEMS_PER_PAGE,
        numberOfStalls - (currentPage - 1) * ITEMS_PER_PAGE,
      ),
    },
    (_, i) => (currentPage - 1) * ITEMS_PER_PAGE + i + 1,
  );

  return (
    <Box className={styles.stallListDisplay}>
      {/* Pagination Buttons */}
      {totalPages > 1 && (
        <PaginationVariant1
          className={commonStyles.iconButtonVariant1}
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )}

      <Grid container className={styles.stallView} spacing={0.5}>
        {paginatedItems.map((globalIndex) => (
          <Grid size={2} key={globalIndex}>
            <CatalogueItemCard
              href={"#"}
              imageSrc={"/cubitech_brands/cubifood_light.svg"}
              name={`Shop Name ${globalIndex}`}
              haveChip={true}
              onClick={() => {
                onSelectStall(globalIndex - 1);
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StallListDisplay;

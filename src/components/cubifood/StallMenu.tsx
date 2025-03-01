import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import PaginationVariant1 from "../common/PaginationVariant1";
import commonStyles from "../../styles/common.module.scss";
import styles from "../../styles/cubifood.module.scss";
import { FC, useState } from "react";
import ItemCard from "../common/ItemCard";

interface StallMenuProps {
  stallId: number;
  numberOfItems: number;
}

const ITEMS_PER_PAGE = 12;

const StallMenu: FC<StallMenuProps> = ({ stallId, numberOfItems }) => {
  const [currentPage, setCurrentPage] = useState(1);

  /* Total items and paginated data */
  const totalPages = Math.ceil(numberOfItems / ITEMS_PER_PAGE);

  const paginatedItems = Array.from(
    {
      length: Math.min(
        ITEMS_PER_PAGE,
        numberOfItems - (currentPage - 1) * ITEMS_PER_PAGE,
      ),
    },
    (_, i) => (currentPage - 1) * ITEMS_PER_PAGE + i + 1,
  );

  return (
    <Box className={styles.stallMenu} key={stallId}>
      {/* Pagination Buttons */}
      {totalPages > 1 && (
        <PaginationVariant1
          className={commonStyles.iconButtonVariant1}
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )}

      <Grid container className={styles.menuView} spacing={0.5}>
        {paginatedItems.map((globalIndex) => (
          <Grid size={2} key={globalIndex}>
            <ItemCard
              href={`/cubifood/item/${globalIndex}`}
              imageSrc={"/cubitech_brands/cubifood_light.svg"}
              name={`Item Name ${globalIndex}`}
              price={9.99}
              haveChip={false}
              isCUBIMart={false}
              onClick={() => {}}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StallMenu;

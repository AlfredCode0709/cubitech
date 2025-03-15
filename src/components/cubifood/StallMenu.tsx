import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import ItemCard from "../common/card/ItemCard";
import PaginationVariant1 from "../common/pagination/PaginationVariant1";
import commonStyles from "@/styles/common.module.scss";
import styles from "@/styles/cubifood.module.scss";
import { FC, useState } from "react";

interface StallMenuProps {
  stallId: number;
  numberOfItems: number;
}

const itemsPerPage = 12;

const StallMenu: FC<StallMenuProps> = ({ stallId, numberOfItems }) => {
  const [currentPage, setCurrentPage] = useState(1);

  /* Total items and paginated data */
  const totalPages = Math.ceil(numberOfItems / itemsPerPage);

  const paginatedItems = Array.from(
    {
      length: Math.min(
        itemsPerPage,
        numberOfItems - (currentPage - 1) * itemsPerPage
      ),
    },
    (_, i) => (currentPage - 1) * itemsPerPage + i + 1
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
              imageSrc={
                "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741345165/cubifood_light_j6lpn9.svg"
              }
              name={`Item Name ${globalIndex}`}
              price={9.99}
              haveChip={false}
              isCUBIMart={false}
              otherText={false}
              onClick={() => {}}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StallMenu;

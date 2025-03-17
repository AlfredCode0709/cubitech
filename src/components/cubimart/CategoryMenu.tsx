import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import ItemCard from "@/components/common/card/ItemCard";
import PaginationVariant1 from "@/components/common/pagination/PaginationVariant1";
import commonStyles from "@/styles/common.module.scss";
import styles from "@/styles/cubimart.module.scss";
import { FC, useState } from "react";

interface CategoryMenuProps {
  categoryId: number;
  numberOfItems: number;
}

const itemsPerPage = 12;

const CategoryMenu: FC<CategoryMenuProps> = ({ categoryId, numberOfItems }) => {
  const [currentPage, setCurrentPage] = useState(1);

  /* Total items and paginated data */
  const totalPages = Math.ceil(numberOfItems / itemsPerPage);

  const paginatedItems = Array.from(
    {
      length: Math.min(
        itemsPerPage,
        numberOfItems - (currentPage - 1) * itemsPerPage,
      ),
    },
    (_, i) => (currentPage - 1) * itemsPerPage + i + 1,
  );

  return (
    <Box className={styles.categoryMenu} key={categoryId}>
      {/* Pagination Buttons */}
      {totalPages > 1 && (
        <PaginationVariant1
          className={commonStyles.iconButtonVariant2}
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )}

      <Grid container className={styles.menuView} spacing={0.5}>
        {paginatedItems.map((globalIndex) => (
          <Grid size={2} key={globalIndex}>
            <ItemCard
              href={`/cubimart/item/${globalIndex}`}
              imageSrc={
                "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741345166/cubimart_light_i70igy.svg"
              }
              name={`Item Name ${globalIndex}`}
              price={9.99}
              haveChip={false}
              isCUBIMart={true}
              otherText={false}
              onClick={() => {}}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryMenu;

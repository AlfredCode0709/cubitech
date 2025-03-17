import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import ItemCard from "@/components/common/card/ItemCard";
import PaginationVariant1 from "@/components/common/pagination/PaginationVariant1";
import commonStyles from "@/styles/common.module.scss";
import styles from "@/styles/cubimart.module.scss";
import { FC, MouseEvent, useState } from "react";

interface CategoryListDisplayProps {
  onSelectCategory: (categoryId: number) => void;
  numberOfCategories: number;
}

const itemsPerPage = 12;

const CategoryListDisplay: FC<CategoryListDisplayProps> = ({
  onSelectCategory,
  numberOfCategories,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  /* Total items and paginated data */
  const totalPages = Math.ceil(numberOfCategories / itemsPerPage);

  const paginatedItems = Array.from(
    {
      length: Math.min(
        itemsPerPage,
        numberOfCategories - (currentPage - 1) * itemsPerPage,
      ),
    },
    (_, i) => (currentPage - 1) * itemsPerPage + i + 1,
  );

  return (
    <Box className={styles.categoryListDisplay}>
      {/* Pagination Buttons */}
      {totalPages > 1 && (
        <PaginationVariant1
          className={commonStyles.iconButtonVariant2}
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )}

      <Grid container className={styles.categoryView} spacing={0.5}>
        {paginatedItems.map((globalIndex) => (
          <Grid size={2} key={globalIndex}>
            <ItemCard
              href={"#"}
              imageSrc={
                "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741345166/cubimart_light_i70igy.svg"
              }
              name={`Category ${globalIndex}`}
              price={0}
              haveChip={false}
              isCUBIMart={false}
              otherText={false}
              onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                onSelectCategory(globalIndex - 1);
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryListDisplay;

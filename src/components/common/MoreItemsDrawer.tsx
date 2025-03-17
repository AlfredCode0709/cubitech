import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ItemCard from "@/components/common/card/ItemCard";
import PaginationVariant1 from "@/components/common/pagination/PaginationVariant1";
import commonStyles from "@/styles/common.module.scss";
import { CSSProperties, FC, useState } from "react";

interface MoreItemsDrawerProps {
  totalItems: number;
  brand: string;
}

const itemsPerPage = 6;

const MoreItemsDrawer: FC<MoreItemsDrawerProps> = ({ totalItems, brand }) => {
  const [currentPage, setCurrentPage] = useState<{ [key: string]: number }>({
    CUBIFood: 1,
    CUBIMart: 1,
  });

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  /* Get the current page based on the brand */
  const currentBrandPage = currentPage[brand] || 1;

  const paginatedItems = Array.from(
    {
      length: Math.min(
        itemsPerPage,
        totalItems - (currentBrandPage - 1) * itemsPerPage,
      ),
    },
    (_, i) => (currentBrandPage - 1) * itemsPerPage + i + 1,
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage((prev) => ({
      ...prev,
      [brand]: newPage /* Update only the relevant brand */,
    }));
  };

  return (
    <Box className={commonStyles.moreItemsDrawer}>
      <Stack className={commonStyles.header}>
        <Typography
          className={commonStyles.title}
          sx={
            {
              "--color":
                brand === "CUBIFood" ? "#08834e" : `var(--primary-main)`,
            } as CSSProperties
          }
        >
          {brand === "CUBIFood"
            ? `You may enjoy more foods here!`
            : `More items to buy here!`}
        </Typography>
        {totalPages > 1 && (
          <PaginationVariant1
            className={
              brand === "CUBIFood"
                ? commonStyles.iconButtonVariant1
                : commonStyles.iconButtonVariant2
            }
            currentPage={currentBrandPage}
            totalPages={totalPages}
            setCurrentPage={handlePageChange}
          />
        )}
      </Stack>
      <Grid container className={commonStyles.itemsView} spacing={0.5}>
        {paginatedItems.map((globalIndex) => (
          <Grid size={2} key={globalIndex}>
            <ItemCard
              href={
                brand === "CUBIFood"
                  ? `/cubifood/item/${globalIndex}`
                  : `/cubimart/item/${globalIndex}`
              }
              imageSrc={
                brand === "CUBIFood"
                  ? "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741345165/cubifood_light_j6lpn9.svg"
                  : "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741345166/cubimart_light_i70igy.svg"
              }
              name={`Item Name ${globalIndex}`}
              price={9.99}
              haveChip={false}
              isCUBIMart={brand === "CUBIMart" ? true : false}
              otherText={false}
              onClick={() => {}}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MoreItemsDrawer;

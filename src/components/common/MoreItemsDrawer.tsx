import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ItemCard from "./ItemCard";
import PaginationVariant1 from "./PaginationVariant1";
import commonStyles from "../../styles/common.module.scss";
import { CSSProperties, FC, useState } from "react";

interface MoreItemsDrawerProps {
  totalItems: number;
  brand: string;
}

const itemsPerPage = 6;

const MoreItemsDrawer: FC<MoreItemsDrawerProps> = ({ totalItems, brand }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedItems = Array.from(
    {
      length: Math.min(
        itemsPerPage,
        totalItems - (currentPage - 1) * itemsPerPage
      ),
    },
    (_, i) => (currentPage - 1) * itemsPerPage + i + 1
  );

  return (
    <Box className={commonStyles.moreItemsDrawer}>
      <Stack className={commonStyles.header}>
        <Typography
          className={commonStyles.title}
          style={
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
            className={brand === "CUBIFood" ? commonStyles.iconButtonVariant1 : commonStyles.iconButtonVariant2}
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
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
                  ? "/cubitech_brands/cubifood_light.svg"
                  : "/cubitech_brands/cubimart_light.svg"
              }
              name={`Item Name ${globalIndex}`}
              price={9.99}
              haveChip={false}
              isCUBIMart={brand === "CUBIMart" ? true : false}
              onClick={() => {}}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MoreItemsDrawer;

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ItemCard from "../common/card/ItemCard";
import PaginationVariant1 from "../common/pagination/PaginationVariant1";
import styles from "@/styles/cubimart.module.scss";
import { FC, useState } from "react";

const itemsPerPage = 6;

interface BargainBlitzProps {
  totalItems: number;
}

const BargainBlitz: FC<BargainBlitzProps> = ({ totalItems }) => {
  const [currentPage, setCurrentPage] = useState(1);

  /* Total items and paginated data */
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedItems = Array.from(
    {
      length: Math.min(
        itemsPerPage,
        totalItems - (currentPage - 1) * itemsPerPage,
      ),
    },
    (_, i) => (currentPage - 1) * itemsPerPage + i + 1,
  );

  return (
    <Box className={styles.bargainBlitz}>
      <Stack className={styles.header}>
        <Typography className={styles.title}>Bargain Blitz</Typography>
        <Grid size={6}>
          {/* Pagination Buttons */}
          {totalPages > 1 && (
            <PaginationVariant1
              className={styles.iconButton}
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          )}
        </Grid>
      </Stack>

      <Grid container className={styles.itemsCatalogue} spacing={0.5}>
        {paginatedItems.map((globalIndex) => (
          <Grid size={2} key={globalIndex}>
            <ItemCard
              // href={`/cubimart/item/${globalIndex}`}
              href={"#"}
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

export default BargainBlitz;

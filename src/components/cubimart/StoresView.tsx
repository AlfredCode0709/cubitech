import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ItemCard from "@/components/common/card/ItemCard";
import PaginationVariant1 from "@/components/common/pagination/PaginationVariant1";
import commonStyles from "@/styles/common.module.scss";
import styles from "@/styles/cubimart.module.scss";
import { FC, useState } from "react";

interface StoresViewProps {
  numberOfStores: number;
}

const itemsPerPage = 12;

const StoresView: FC<StoresViewProps> = ({ numberOfStores }) => {
  const [currentPage, setCurrentPage] = useState(1);

  /* Total items and paginated data */
  const totalPages = Math.ceil(numberOfStores / itemsPerPage);

  const paginatedItems = Array.from(
    {
      length: Math.min(
        itemsPerPage,
        numberOfStores - (currentPage - 1) * itemsPerPage,
      ),
    },
    (_, i) => (currentPage - 1) * itemsPerPage + i + 1,
  );

  return (
    <Box className={styles.storesView}>
      <Stack className={styles.header}>
        <Typography className={styles.title}>Stores Catalogue</Typography>
        {/* Pagination Buttons */}
        <PaginationVariant1
          className={commonStyles.iconButtonVariant2}
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </Stack>

      <Grid container className={styles.catalogueView} spacing={0.5}>
        {paginatedItems.map((globalIndex) => (
          <Grid size={2} key={globalIndex}>
            <ItemCard
              // href={`/cubimart/store/${globalIndex}`}
              href={"#"}
              imageSrc={
                "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741345166/cubimart_light_i70igy.svg"
              }
              name={`Store Name ${globalIndex}`}
              price={0}
              haveChip={false}
              isCUBIMart={true}
              otherText={true}
              onClick={() => {}}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StoresView;

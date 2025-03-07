import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import ItemCard from "../common/ItemCard";
import PaginationVariant1 from "../common/PaginationVariant1";
import commonStyles from "../../styles/common.module.scss";
import styles from "../../styles/cubifood.module.scss";
import { FC, useState } from "react";

interface StallListDisplayProps {
  onSelectStall: (stallId: number) => void;
  numberOfStalls: number;
}

const itemsPerPage = 12;

const StallListDisplay: FC<StallListDisplayProps> = ({
  onSelectStall,
  numberOfStalls,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  /* Total items and paginated data */
  const totalPages = Math.ceil(numberOfStalls / itemsPerPage);

  const paginatedItems = Array.from(
    {
      length: Math.min(
        itemsPerPage,
        numberOfStalls - (currentPage - 1) * itemsPerPage
      ),
    },
    (_, i) => (currentPage - 1) * itemsPerPage + i + 1
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
            <ItemCard
              href={"#"}
              imageSrc={"https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741345165/cubifood_light_j6lpn9.svg"}
              name={`Shop Name ${globalIndex}`}
              price={0}
              haveChip={true}
              isCUBIMart={false}
              otherText={false}
              onClick={(e: any) => {
                e.preventDefault();
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

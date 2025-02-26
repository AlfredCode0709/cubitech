import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid2";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CardMediaContainer from "../common/CardMediaContainer";
import PaginationVariant1 from "../common/PaginationVariant1";
import styles from "../../styles/cubimart.module.scss";
import { FC, useState } from "react";

const ITEMS_PER_PAGE = 6;

interface BargainBlitzProps {
  totalItems: number;
}

const BargainBlitz: FC<BargainBlitzProps> = ({ totalItems }) => {
  const [currentPage, setCurrentPage] = useState(1);

  /* Total items and paginated data */
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const paginatedItems = Array.from(
    {
      length: Math.min(
        ITEMS_PER_PAGE,
        totalItems - (currentPage - 1) * ITEMS_PER_PAGE,
      ),
    },
    (_, i) => (currentPage - 1) * ITEMS_PER_PAGE + i + 1,
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
            <Card variant={"outlined"} className={styles.card}>
              <CardActionArea href={`/cubimart/item/${globalIndex}`}>
                <CardMediaContainer
                  imageSrc={"/cubitech_brands/cubimart_light.svg"}
                  alt={"Item Image"}
                />
                <CardContent className={styles.cardContent}>
                  <Typography className={styles.name}>
                    Item Name {globalIndex}
                  </Typography>
                  <Typography className={styles.price}>$9.99</Typography>
                  <Rating className={styles.rating} defaultValue={5} />
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BargainBlitz;

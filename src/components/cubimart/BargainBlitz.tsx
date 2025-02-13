import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
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
      <Grid container className={styles.header}>
        <Grid size={6}>
          <Typography className={styles.title}>Bargain Blitz</Typography>
        </Grid>
        <Grid size={6}>
          {/* Pagination Buttons */}
          {totalPages > 1 && (
            <Box className={styles.paginationButtons}>
              {["prev", "next"].map((dir) => (
                <IconButton
                  key={dir}
                  className={styles.iconButton}
                  onClick={() =>
                    setCurrentPage((prev) => prev + (dir === "prev" ? -1 : 1))
                  }
                  disabled={
                    dir === "prev"
                      ? currentPage === 1
                      : currentPage === totalPages
                  }
                >
                  {dir === "prev" ? (
                    <ArrowBackIosNewIcon />
                  ) : (
                    <ArrowForwardIosIcon />
                  )}
                </IconButton>
              ))}
            </Box>
          )}
        </Grid>
      </Grid>

      <Grid container className={styles.itemsCatalogue} spacing={0.5}>
        {paginatedItems.map((globalIndex) => (
          <Grid size={2} key={globalIndex}>
            <Card variant={"outlined"} className={styles.card}>
              <CardActionArea href={`/cubimart/item/${globalIndex}`}>
                <Box className={styles.cardMediaContainer}>
                  <CardMedia
                    className={styles.cardMedia}
                    component={"img"}
                    image={"/cubitech_brands/cubimart_light.svg"}
                    alt={"Item Image"}
                  />
                </Box>
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

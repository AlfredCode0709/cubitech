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

const BargainBlitz: FC<any> = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = Array.from({ length: 18 });
  const totalPages = Math.ceil(totalItems.length / ITEMS_PER_PAGE);

  const paginatedItems = totalItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <Box className={styles.bargainBlitz}>
      <Grid container>
        <Grid size={3}>
          <Typography className={styles.title}>Bargain Blitz</Typography>
        </Grid>
        <Grid size={9}>
          {/* Pagination Buttons */}
          {totalPages > 1 && (
            <Box className={styles.paginationButtons}>
              <IconButton
                className={styles.iconButton}
                onClick={handlePrevious}
                disabled={currentPage === 1}
              >
                <ArrowBackIosNewIcon />
              </IconButton>
              <IconButton
                className={styles.iconButton}
                onClick={handleNext}
                disabled={currentPage === totalPages}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>
          )}
        </Grid>
      </Grid>

      <Grid container className={styles.gridContainer} spacing={0.5}>
        {paginatedItems.map((_, index) => {
          const globalIndex = (currentPage - 1) * ITEMS_PER_PAGE + index + 1; // Calculate global index

          return (
            <Grid size={2} key={index}>
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
          );
        })}
      </Grid>
    </Box>
  );
};

export default BargainBlitz;

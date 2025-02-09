import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styles from "../../styles/cubifood.module.scss";
import { FC, useState } from "react";

interface StallMenuProps {
  stallId: number;
  numberOfItems: number;
}

const ITEMS_PER_PAGE = 12;

const StallMenu: FC<StallMenuProps> = ({ stallId, numberOfItems }) => {
  const [currentPage, setCurrentPage] = useState(1);

  /* Total items and paginated data */
  const totalPages = Math.ceil(numberOfItems / ITEMS_PER_PAGE);

  const paginatedItems = Array.from({ length: numberOfItems }).slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  /* Handlers for pagination */
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <Box className={styles.stallMenu} key={stallId}>
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

      <Grid container className={styles.gridContainer} spacing={0.5}>
        {paginatedItems.map((_, index) => {
          const globalIndex = (currentPage - 1) * ITEMS_PER_PAGE + index + 1;

          return (
            <Grid size={2} key={index}>
              <Card variant={"outlined"} className={styles.card}>
                <CardActionArea href={`/cubifood/item/${index + 1}`}>
                  <Box className={styles.cardMediaContainer}>
                    <CardMedia
                      className={styles.cardMedia}
                      component={"img"}
                      image={"/cubitech_brands/cubifood_light.svg"}
                      alt={"CategorisedItem"}
                    />
                  </Box>
                  <CardContent className={styles.cardContent}>
                    <Typography className={styles.name}>
                      Item Name {globalIndex}
                    </Typography>
                    <Typography className={styles.price}>$9.99</Typography>
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

export default StallMenu;

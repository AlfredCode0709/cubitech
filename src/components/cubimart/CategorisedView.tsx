import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Add from "@mui/icons-material/Add";
import ArrowBackIosNew from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import styles from "../../styles/cubimart.module.scss";
import { useState } from "react";

interface CategorisedViewProps {
  imageSrc: string;
}

const ITEMS_PER_PAGE = 12;

const CategorisedView: React.FC<CategorisedViewProps> = ({ imageSrc }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Total items and paginated data
  const totalItems = Array.from({ length: 36 }); // Mock 36 items
  const totalPages = Math.ceil(totalItems.length / ITEMS_PER_PAGE);

  const paginatedItems = totalItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Handlers for pagination
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <Box className={styles.categorisedView}>
      {/* Pagination Buttons */}
      <Box className={styles.paginationButtons}>
        <IconButton
          aria-label="Previous page"
          className={styles.iconButton}
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          <ArrowBackIosNew />
        </IconButton>
        <IconButton
          aria-label="Next page"
          className={styles.iconButton}
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>

      <Grid container className={styles.gridContainer} spacing={0.5}>
        {paginatedItems.map((_, index) => {
          const globalIndex = (currentPage - 1) * ITEMS_PER_PAGE + index + 1; // Calculate global index

          return (
            <Grid item xs={2} key={index}>
              <Card variant={"outlined"} className={styles.card}>
                <Box className={styles.cardMediaContainer}>
                  <CardMedia
                    className={styles.cardMedia}
                    component={"img"}
                    image={imageSrc}
                    alt={"CategorisedItem"}
                  />
                </Box>
                <CardContent className={styles.cardContent}>
                  <Typography className={styles.name}>
                    Item Name {globalIndex}
                  </Typography>
                  <Typography className={styles.price}>$9.99</Typography>
                  <Rating className={styles.rating} defaultValue={5} />
                </CardContent>
                <CardActions className={styles.cardActions}>
                  <Button
                    startIcon={<Add />}
                    size={"small"}
                    variant={"contained"}
                  >
                    Add To Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default CategorisedView;

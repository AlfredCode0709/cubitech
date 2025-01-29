import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowBackIosNew from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import styles from "../../styles/cubifood.module.scss";

interface FilteredCatalogueProps {
  imageSrc: string;
}

const ITEMS_PER_PAGE = 12;

const FilteredCatalogue: React.FC<FilteredCatalogueProps> = ({ imageSrc }) => {
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
    <Box className={styles.filteredCatalogue}>
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
                <CardActionArea>
                  <Box className={styles.cardMediaContainer}>
                    <CardMedia
                      className={styles.cardMedia}
                      component={"img"}
                      image={imageSrc}
                      alt={"Shop Image"}
                    />
                  </Box>
                  <CardContent className={styles.cardContent}>
                    <Typography className={styles.name}>
                      Shop Name {globalIndex}
                    </Typography>
                    <Chip className={styles.chip} label="9mins" />
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

export default FilteredCatalogue;

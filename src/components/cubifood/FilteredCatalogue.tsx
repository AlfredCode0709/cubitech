import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { FC, useState } from "react";
import styles from "../../styles/cubifood.module.scss";

interface FilteredCatalogueProps {
  imageSrc: string;
  numberOfStalls: number;
}

const ITEMS_PER_PAGE = 12;

const FilteredCatalogue: FC<FilteredCatalogueProps> = ({
  imageSrc,
  numberOfStalls,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  /* Total items and paginated data */
  const totalPages = Math.ceil(numberOfStalls / ITEMS_PER_PAGE);

  const paginatedItems = Array.from({ length: numberOfStalls }).slice(
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
    <Box className={styles.filteredCatalogue}>
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
                <CardActionArea href={`/cubifood/outlet/${globalIndex}`}>
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

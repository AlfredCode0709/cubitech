import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import ArrowBackIosNew from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import styles from "../../styles/cubimart.module.scss";
import { FC, useState } from "react";

interface CategorisedViewProps {
  imageSrc: string;
}

const ITEMS_PER_PAGE = 12;

const CategorisedView: FC<CategorisedViewProps> = ({ imageSrc }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = Array.from({ length: 36 });
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
    <Box className={styles.categorisedView}>
      {/* Pagination Buttons */}
      {totalPages > 1 && (
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
      )}

      <Grid container className={styles.itemsView} spacing={0.5}>
        {paginatedItems.map((_, index) => {
          const globalIndex = (currentPage - 1) * ITEMS_PER_PAGE + index + 1; // Calculate global index

          return (
            <Grid item xs={2} key={index}>
              <Card variant={"outlined"} className={styles.card}>
                <CardActionArea href={`/cubimart/item/${globalIndex}`}>
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
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default CategorisedView;

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";
import styles from "../../styles/index.module.scss";
import { FC, useState } from "react";

interface PeekViewProps {
  title: string;
}

const ITEMS_PER_PAGE = 6;

const PeekView: FC<PeekViewProps> = ({ title }) => {
  /* Determines the image path based on the title */
  const imagePath =
    title === "CUBIFood"
      ? "/cubitech_brands/cubifood_light.svg"
      : title === "CUBIMart"
        ? "/cubitech_brands/cubimart_light.svg"
        : "/cubitech_brands/cubitech_light.svg";

  /* Determines the color for the second part of the title */
  const titleSubColor = title === "CUBIFood" ? "#09b96d" : "#bf3953";

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
    <Box
      className={styles.peekView}
      borderTop={title === "CUBIFood" ? 0 : "1px solid var(--divider-color)"}
    >
      <Grid container>
        <Grid size={2}>
          {/* Link to the corresponding page based on the title */}
          <Link href={title === "CUBIFood" ? "/cubifood" : "/cubimart"}>
            <Typography className={styles.title}>
              {title.substring(0, 4)}
              <span style={{ color: titleSubColor }}>{title.substring(4)}</span>
            </Typography>
          </Link>
        </Grid>
        <Grid size={10}>
          {/* Pagination Buttons */}
          {totalPages > 1 && (
            <Box className={styles.paginationButtons}>
              <IconButton
                className={
                  title === "CUBIFood"
                    ? styles.iconButtonVariant1
                    : styles.iconButtonVariant2
                }
                onClick={handlePrevious}
                disabled={currentPage === 1}
              >
                <ArrowBackIosNewIcon />
              </IconButton>
              <IconButton
                className={
                  title === "CUBIFood"
                    ? styles.iconButtonVariant1
                    : styles.iconButtonVariant2
                }
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
          const globalIndex =
            (currentPage - 1) * ITEMS_PER_PAGE +
            index +
            1; /* Calculate global index */

          return (
            <Grid size={2} key={index}>
              <Card variant={"outlined"} className={styles.card}>
                <Box className={styles.cardMediaContainer}>
                  <CardMedia
                    className={styles.cardMedia}
                    component={"img"}
                    image={imagePath}
                    alt={"Item Image"}
                  />
                </Box>
                <CardContent className={styles.cardContent}>
                  <Typography className={styles.name}>
                    Item Name {globalIndex}
                  </Typography>
                  <Typography className={styles.price}>$9.99</Typography>
                  {title === "CUBIMart" ? (
                    <Rating defaultValue={5} className={styles.rating} />
                  ) : (
                    ""
                  )}
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default PeekView;

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
import styles from "../../styles/cubimart.module.scss";
import { FC, useState } from "react";

interface CategoryListDisplayProps {
  onSelectCategory: (categoryId: number) => void;
  numberOfCategories: number;
}

const ITEMS_PER_PAGE = 12;

const CategoryListDisplay: FC<CategoryListDisplayProps> = ({
  onSelectCategory,
  numberOfCategories,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  /* Total items and paginated data */
  const totalPages = Math.ceil(numberOfCategories / ITEMS_PER_PAGE);

  const paginatedItems = Array.from(
    {
      length: Math.min(
        ITEMS_PER_PAGE,
        numberOfCategories - (currentPage - 1) * ITEMS_PER_PAGE,
      ),
    },
    (_, i) => (currentPage - 1) * ITEMS_PER_PAGE + i + 1,
  );

  return (
    <Box className={styles.categoryListDisplay}>
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
                dir === "prev" ? currentPage === 1 : currentPage === totalPages
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

      <Grid container className={styles.categoryView} spacing={0.5}>
        {paginatedItems.map((globalIndex) => (
          <Grid size={2} key={globalIndex}>
            <Card variant={"outlined"} className={styles.card}>
              <CardActionArea onClick={() => onSelectCategory(globalIndex - 1)}>
                <Box className={styles.cardMediaContainer}>
                  <CardMedia
                    className={styles.cardMedia}
                    component={"img"}
                    image={"/cubitech_brands/cubimart_light.svg"}
                    alt={"Shop Image"}
                  />
                </Box>
                <CardContent className={styles.cardContent}>
                  <Typography className={styles.name}>
                    Category {globalIndex}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryListDisplay;

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CardMediaContainer from "../common/CardMediaContainer";
import styles from "../../styles/cubifood.module.scss";
import { FC, useState } from "react";

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

  const paginatedItems = Array.from(
    {
      length: Math.min(
        ITEMS_PER_PAGE,
        numberOfStalls - (currentPage - 1) * ITEMS_PER_PAGE,
      ),
    },
    (_, i) => (currentPage - 1) * ITEMS_PER_PAGE + i + 1,
  );

  return (
    <Box className={styles.filteredCatalogue}>
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

      <Grid container className={styles.catalogueView} spacing={0.5}>
        {paginatedItems.map((globalIndex) => (
          <Grid size={2} key={globalIndex}>
            <Card variant={"outlined"} className={styles.card}>
              <CardActionArea href={`/cubifood/outlet/${globalIndex}`}>
                <CardMediaContainer imageSrc={imageSrc} alt={"Shop Image"} />
                <CardContent className={styles.cardContent}>
                  <Typography className={styles.name}>
                    Shop Name {globalIndex}
                  </Typography>
                  <Chip className={styles.chip} label="9mins" />
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FilteredCatalogue;

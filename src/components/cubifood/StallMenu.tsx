import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CardMediaContainer from "../common/CardMediaContainer";
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

  const paginatedItems = Array.from(
    {
      length: Math.min(
        ITEMS_PER_PAGE,
        numberOfItems - (currentPage - 1) * ITEMS_PER_PAGE,
      ),
    },
    (_, i) => (currentPage - 1) * ITEMS_PER_PAGE + i + 1,
  );

  return (
    <Box className={styles.stallMenu} key={stallId}>
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

      <Grid container className={styles.menuView} spacing={0.5}>
        {paginatedItems.map((globalIndex) => (
          <Grid size={2} key={globalIndex}>
            <Card variant={"outlined"} className={styles.card}>
              <CardActionArea href={`/cubifood/item/${globalIndex}`}>
                <CardMediaContainer
                  imageSrc={"/cubitech_brands/cubifood_light.svg"}
                  alt={"Categorised Item"}
                />
                <CardContent className={styles.cardContent}>
                  <Typography className={styles.name}>
                    Item Name {globalIndex}
                  </Typography>
                  <Typography className={styles.price}>$9.99</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StallMenu;

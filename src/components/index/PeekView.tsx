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

const ITEMS_PER_PAGE = 6;

const TITLE_CONFIG = {
  CUBIFood: {
    path: "/cubitech_brands/cubifood_light.svg",
    color: "#09b96d",
    link: "/cubifood",
  },
  CUBIMart: {
    path: "/cubitech_brands/cubimart_light.svg",
    color: "#bf3953",
    link: "/cubimart",
  },
} as const;

type TitleType = keyof typeof TITLE_CONFIG;

interface PeekViewProps {
  title: TitleType;
  totalItems: number;
}

const PeekView: FC<PeekViewProps> = ({ title, totalItems }) => {
  const {
    path: imagePath,
    color: titleSubColor,
    link,
  } = TITLE_CONFIG[title] || {
    path: "/cubitech_brands/cubitech_light.svg",
    color: "#bf3953",
    link: "/",
  };

  const [currentPage, setCurrentPage] = useState(1);

  /* Total items and paginated data */
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const paginatedItems = Array.from(
    {
      length: Math.min(
        ITEMS_PER_PAGE,
        totalItems - (currentPage - 1) * ITEMS_PER_PAGE
      ),
    },
    (_, i) => (currentPage - 1) * ITEMS_PER_PAGE + i + 1
  );

  return (
    <Box
      className={styles.peekView}
      borderTop={title === "CUBIFood" ? 0 : "1px solid var(--divider-color)"}
    >
      <Grid container className={styles.header}>
        <Grid size={6}>
          <Link href={link}>
            <Typography className={styles.title}>
              {title.substring(0, 4)}
              <span style={{ color: titleSubColor }}>{title.substring(4)}</span>
            </Typography>
          </Link>
        </Grid>
        <Grid size={6}>
          {/* Pagination Buttons */}
          {totalPages > 1 && (
            <Box className={styles.paginationButtons}>
              {["prev", "next"].map((dir) => (
                <IconButton
                  key={dir}
                  className={
                    title === "CUBIFood"
                      ? styles.iconButtonVariant1
                      : styles.iconButtonVariant2
                  }
                  onClick={() =>
                    setCurrentPage((prev) => prev + (dir === "prev" ? -1 : 1))
                  }
                  disabled={
                    dir === "prev"
                      ? currentPage === 1
                      : currentPage === totalPages
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
        </Grid>
      </Grid>

      <Grid container className={styles.itemsCatalogue} spacing={0.5}>
        {paginatedItems.map((globalIndex) => (
          <Grid size={2} key={globalIndex}>
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
        ))}
      </Grid>
    </Box>
  );
};

export default PeekView;

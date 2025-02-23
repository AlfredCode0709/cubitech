import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid2";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import CardMediaContainer from "../common/CardMediaContainer";
import PaginationVariant1 from "../common/PaginationVariant1";
import commonStyles from "../../styles/common.module.scss";
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
    path: imageSrc,
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
      <Stack className={styles.header}>
        <Link href={link}>
          <Typography className={styles.title}>
            {title.substring(0, 4)}
            <span style={{ color: titleSubColor }}>{title.substring(4)}</span>
          </Typography>
        </Link>
        {/* Pagination Buttons */}
        {totalPages > 1 && (
          <PaginationVariant1
            className={
              title === "CUBIFood"
                ? commonStyles.iconButtonVariant1
                : commonStyles.iconButtonVariant2
            }
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        )}
      </Stack>

      <Grid container className={styles.itemsCatalogue} spacing={0.5}>
        {paginatedItems.map((globalIndex) => (
          <Grid size={2} key={globalIndex}>
            <Card variant={"outlined"} className={styles.card}>
              <CardActionArea
                href={
                  title === "CUBIFood"
                    ? `/cubifood/item/${globalIndex}`
                    : `/cubimart/item/${globalIndex}`
                }
              >
                <CardMediaContainer imageSrc={imageSrc} alt={"Item Image"} />
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
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PeekView;

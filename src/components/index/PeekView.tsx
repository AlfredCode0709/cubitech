import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import ItemCard from "../common/ItemCard";
import PaginationVariant1 from "../common/PaginationVariant1";
import commonStyles from "../../styles/common.module.scss";
import styles from "../../styles/index.module.scss";
import { FC, useState } from "react";

const itemsPerPage = 6;

const titleConfig = {
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

type TitleType = keyof typeof titleConfig;

interface PeekViewProps {
  title: TitleType;
  totalItems: number;
}

const PeekView: FC<PeekViewProps> = ({ title, totalItems }) => {
  const {
    path: imageSrc,
    color: titleSubColor,
    link,
  } = titleConfig[title] || {
    path: "/cubitech_brands/cubitech_light.svg",
    color: "#bf3953",
    link: "/",
  };

  const [currentPage, setCurrentPage] = useState(1);

  /* Total items and paginated data */
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedItems = Array.from(
    {
      length: Math.min(
        itemsPerPage,
        totalItems - (currentPage - 1) * itemsPerPage
      ),
    },
    (_, i) => (currentPage - 1) * itemsPerPage + i + 1
  );

  return (
    <Box
      className={styles.peekView}
      borderBottom={"1px solid var(--divider-color)"}
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
            <ItemCard
              href={
                title === "CUBIFood"
                  ? `/cubifood/item/${globalIndex}`
                  : `/cubimart/item/${globalIndex}`
              }
              imageSrc={imageSrc}
              name={`Item Name ${globalIndex}`}
              price={9.99}
              haveChip={false}
              isCUBIMart={title === "CUBIMart" ? true : false}
              onClick={() => {}}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PeekView;

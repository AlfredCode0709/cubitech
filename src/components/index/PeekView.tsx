import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ItemCard from "../common/card/ItemCard";
import PaginationVariant1 from "../common/pagination/PaginationVariant1";
import Link from "next/link";
import commonStyles from "@/styles/common.module.scss";
import styles from "@/styles/index.module.scss";
import { FC, useState } from "react";

const itemsPerPage = 6;

const titleConfig = {
  CUBIFood: {
    path: "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741345165/cubifood_light_j6lpn9.svg",
    color: "#09b96d",
    link: "/cubifood",
  },
  CUBIMart: {
    path: "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741345166/cubimart_light_i70igy.svg",
    color: "#bf3953",
    link: "#",
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
    path: "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741345140/cubitech_light_qhxj6v.svg",
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
        totalItems - (currentPage - 1) * itemsPerPage,
      ),
    },
    (_, i) => (currentPage - 1) * itemsPerPage + i + 1,
  );

  return (
    <Box className={styles.peekView}>
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
              // href={
              //  title === "CUBIFood"
              //    ? `/cubifood/item/${globalIndex}`
              //    : `/cubimart/item/${globalIndex}`
              // }
              href={"#"}
              imageSrc={imageSrc}
              name={`Item Name ${globalIndex}`}
              price={9.99}
              haveChip={false}
              isCUBIMart={title === "CUBIMart" ? true : false}
              otherText={false}
              onClick={() => {}}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PeekView;

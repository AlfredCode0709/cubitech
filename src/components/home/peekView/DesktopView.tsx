import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ItemCard from "@/components/common/card/ItemCard";
import commonStyles from "@/styles/common.module.scss";
import styles from "@/styles/home.module.scss";
import { titleConfig, TitleType } from "./PeekView";
import { FC, useState } from "react";

const itemsPerPage = 6;

interface DesktopViewProps {
  title: TitleType;
  totalItems: number;
}

const DesktopView: FC<DesktopViewProps> = ({ title, totalItems }) => {
  const { path: imageSrc, color: titleSubColor } = titleConfig[title] || {
    path: "https://ik.imagekit.io/a1fr3d10/cubitech_light.svg?updatedAt=1748148047329",
    color: "#bf3953",
  };

  const [currentPage, setCurrentPage] = useState(1);
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

  const paginationColour = title === "CUBIFood" ? commonStyles.paginationColour1 : commonStyles.paginationColour2;

  return (
    <Box className={styles.desktop}>
      <Stack className={styles.header}>
        <Typography className={styles.title}>
          {title.substring(0, 4)}
          <span style={{ color: titleSubColor }}>{title.substring(4)}</span>
        </Typography>

        {totalPages > 1 && (
          <Box className={paginationColour}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={(event, page) => setCurrentPage(page)}
              size="large"
              renderItem={(item) => {
                if (item.type === "previous" || item.type === "next") {
                  return (
                    <PaginationItem
                      {...item}
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 32,
                        },
                      }}
                    />
                  );
                }
                return null;
              }}
            />
          </Box>
        )}
      </Stack>

      <Grid container className={styles.itemsCatalogue} spacing={0.5}>
        {paginatedItems.map((globalIndex) => (
          <Grid size={2} key={globalIndex}>
            <ItemCard
              href={"#"}
              cardImage={imageSrc}
              name={`Item Name ${globalIndex}`}
              price={9.99}
              brand={title}
              onClick={() => {}}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DesktopView;

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import commonStyles from "../../styles/common.module.scss";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import ItemCard from "./ItemCard";

interface MoreItemsDrawerProps {
  totalItems: number;
}

const ITEMS_PER_PAGE = 6;

const MoreItemsDrawer: FC<MoreItemsDrawerProps> = ({ totalItems }) => {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);

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
    <Box className={commonStyles.moreItemsDrawer}>
      <Stack className={commonStyles.header}>
        <Typography className={commonStyles.title}>
          You may enjoy more foods here!
        </Typography>
        {totalPages > 1 && (
          <Box className={commonStyles.paginationButtons}>
            {["prev", "next"].map((dir) => (
              <IconButton
                key={dir}
                className={commonStyles.iconButton}
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
      </Stack>
      <Grid container className={commonStyles.itemsView} spacing={0.5}>
        {paginatedItems.map((globalIndex) => (
          <Grid size={2} key={globalIndex}>
            <ItemCard
              href={
                router.pathname === `/cubifood/item/[...id]`
                  ? `/cubifood/item/${globalIndex}`
                  : `/cubimart/item/${globalIndex}`
              }
              imageSrc={
                router.pathname === `/cubifood/item/[...id]`
                  ? "/cubitech_brands/cubifood_light.svg"
                  : "/cubitech_brands/cubimart_light.svg"
              }
              name={`Item Name ${globalIndex}`}
              price={9.99}
              haveChip={false}
              isCUBIMart={
                router.pathname === `/cubimart/item/[...id]` ? true : false
              }
              onClick={() => {}}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MoreItemsDrawer;

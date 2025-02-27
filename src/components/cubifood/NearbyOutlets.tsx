import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styles from "../../styles/cubifood.module.scss";
import { FC, Fragment, MouseEvent, useEffect, useRef, useState } from "react";

interface NearbyOutletsProps {
  numberOfStalls: number;
}

const NearbyOutlets: FC<NearbyOutletsProps> = ({ numberOfStalls }) => {
  const shopListRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [dragState, setDragState] = useState<
    Record<number, { isDragging: boolean; startX: number; scrollLeft: number }>
  >({});
  const [paginationState, setPaginationState] = useState<
    Record<
      number,
      { disablePrev: boolean; disableNext: boolean; showPagination: boolean }
    >
  >({});

  const setShopListRef = (el: HTMLDivElement | null, index: number) => {
    shopListRefs.current[index] = el;
  };

  const handleMouseDown = (e: MouseEvent, index: number) => {
    e.preventDefault();
    const shopList = shopListRefs.current[index];
    if (!shopList) return;

    setDragState((prevState) => ({
      ...prevState,
      [index]: {
        isDragging: true,
        startX: e.pageX - shopList.offsetLeft,
        scrollLeft: shopList.scrollLeft,
      },
    }));
  };

  const handleMouseMove = (e: MouseEvent, index: number) => {
    if (!dragState[index]?.isDragging) return;
    const shopList = shopListRefs.current[index];
    if (!shopList) return;

    const x = e.pageX - shopList.offsetLeft;
    const walk = (x - dragState[index].startX) * 2;
    shopList.scrollLeft = dragState[index].scrollLeft - walk;
  };

  const handleMouseUpOrLeave = (index: number) => {
    setDragState((prevState) => ({
      ...prevState,
      [index]: { ...prevState[index], isDragging: false },
    }));
  };

  const updatePaginationState = (index: number) => {
    const shopList = shopListRefs.current[index];
    if (!shopList) return;

    const atStart = shopList.scrollLeft === 0;
    const atEnd =
      Math.ceil(shopList.scrollLeft + shopList.clientWidth) >=
      shopList.scrollWidth;
    const noScrollNeeded = shopList.scrollWidth <= shopList.clientWidth;

    setPaginationState((prevState) => ({
      ...prevState,
      [index]: {
        disablePrev: atStart,
        disableNext: atEnd,
        showPagination: !noScrollNeeded,
      },
    }));
  };

  useEffect(() => {
    shopListRefs.current.forEach((shopList, index) => {
      if (!shopList) return;
      shopList.addEventListener("scroll", () => updatePaginationState(index));
    });

    window.addEventListener("resize", () => {
      shopListRefs.current.forEach((_, index) => updatePaginationState(index));
    });

    return () => {
      shopListRefs.current.forEach((shopList, index) => {
        if (!shopList) return;
        shopList.removeEventListener("scroll", () =>
          updatePaginationState(index),
        );
      });
      window.removeEventListener("resize", () => {
        shopListRefs.current.forEach((_, index) =>
          updatePaginationState(index),
        );
      });
    };
  }, []);

  return (
    <Box className={styles.nearbyOutlets}>
      <Typography className={styles.title}>Nearby Outlets</Typography>

      {Array.from({ length: 3 }).map((_, outletIndex) => (
        <Fragment key={outletIndex}>
          {/* Outlet Header */}
          <Stack className={styles.outletHeader}>
            <Stack className={styles.leftSection}>
              <Avatar
                className={styles.avatar}
                alt="Outlet Logo"
                src="/navbar_icons/cubifood_icon.svg"
              />
              <Typography className={styles.outletName}>Outlet Name</Typography>
            </Stack>
            <Stack className={styles.rightSection}>
              <Typography className={styles.distance}>1.99 km</Typography>
              <IconButton
                className={styles.outletViewButton}
                href={`/cubifood/outlet/${outletIndex + 1}`}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </Stack>
          </Stack>

          {/* Shop List */}
          <Box
            ref={(el) =>
              setShopListRef(el as HTMLDivElement | null, outletIndex)
            }
            className={`${styles.shopList} ${
              dragState[outletIndex]?.isDragging && styles.dragging
            }`}
            onMouseDown={(e) => handleMouseDown(e, outletIndex)}
            onMouseMove={(e) => handleMouseMove(e, outletIndex)}
            onMouseUp={() => handleMouseUpOrLeave(outletIndex)}
            onMouseLeave={() => handleMouseUpOrLeave(outletIndex)}
          >
            <Grid
              container
              spacing={2}
              className={styles.content}
              wrap={"nowrap"}
            >
              {Array.from({ length: numberOfStalls }).map((_, stallIndex) => (
                <Grid key={stallIndex} sx={{ flex: "0 0 auto" }}>
                  <Card variant={"outlined"} className={styles.shopCard}>
                    <CardActionArea href={`/cubifood/outlet/${stallIndex + 1}`}>
                      <Box className={styles.cardMediaContainer}>
                        <CardMedia
                          className={styles.cardMedia}
                          component={"img"}
                          image={"/cubitech_brands/cubifood_light.svg"}
                          alt={"Card Media"}
                        />
                      </Box>
                      <CardContent className={styles.cardContent}>
                        <Typography className={styles.name}>
                          Shop Name {stallIndex + 1}
                        </Typography>
                        <Chip className={styles.chip} label="9mins" />
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Fragment>
      ))}
    </Box>
  );
};

export default NearbyOutlets;

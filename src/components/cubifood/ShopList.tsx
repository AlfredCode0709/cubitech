import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import CardMediaContainer from "../common/CardMediaContainer";
import styles from "../../styles/cubifood.module.scss";
import { FC, MouseEvent, useEffect, useRef, useState } from "react";

interface ShopListProps {
  numberOfStalls: number;
  outletIndex: number;
}

const ShopList: FC<ShopListProps> = ({ numberOfStalls, outletIndex }) => {
  const shopListRef = useRef<HTMLDivElement | null>(null);
  const [dragState, setDragState] = useState({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
  });
  const [paginationState, setPaginationState] = useState({
    disablePrev: true,
    disableNext: false,
    showPagination: true,
  });

  const handleMouseDown = (e: MouseEvent) => {
    if (!shopListRef.current) return;
    e.preventDefault();
    setDragState({
      isDragging: true,
      startX: e.pageX - shopListRef.current.offsetLeft,
      scrollLeft: shopListRef.current.scrollLeft,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragState.isDragging || !shopListRef.current) return;
    const x = e.pageX - shopListRef.current.offsetLeft;
    const walk = (x - dragState.startX) * 2;
    shopListRef.current.scrollLeft = dragState.scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setDragState((prevState) => ({ ...prevState, isDragging: false }));
  };

  const updatePaginationState = () => {
    if (!shopListRef.current) return;
    const atStart = shopListRef.current.scrollLeft === 0;
    const atEnd =
      Math.ceil(shopListRef.current.scrollLeft + shopListRef.current.clientWidth) >=
      shopListRef.current.scrollWidth;
    const noScrollNeeded = shopListRef.current.scrollWidth <= shopListRef.current.clientWidth;

    setPaginationState({
      disablePrev: atStart,
      disableNext: atEnd,
      showPagination: !noScrollNeeded,
    });
  };

  useEffect(() => {
    const shopList = shopListRef.current;
    if (!shopList) return;

    shopList.addEventListener("scroll", updatePaginationState);
    window.addEventListener("resize", updatePaginationState);

    return () => {
      shopList.removeEventListener("scroll", updatePaginationState);
      window.removeEventListener("resize", updatePaginationState);
    };
  }, []);

  return (
    <Box
      ref={shopListRef}
      className={`${styles.shopList} ${dragState.isDragging && styles.dragging}`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
    >
      <Grid container spacing={2} className={styles.content} wrap="nowrap">
        {Array.from({ length: numberOfStalls }).map((_, stallIndex) => (
          <Grid key={stallIndex} sx={{ flex: "0 0 auto" }}>
            <Card className={styles.shopCard} variant={"outlined"}>
              <CardActionArea href={`/cubifood/outlet/${stallIndex + 1}`}>
                <CardMediaContainer imageSrc="/cubitech_brands/cubifood_light.svg" />
                <CardContent className={styles.contentData}>
                  <Typography className={styles.name}>Shop Name {stallIndex + 1}</Typography>
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

export default ShopList;

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import CardMediaContainer from "@/components/common/CardMediaContainer";
import styles from "@/styles/cubifood.module.scss";
import { FC, MouseEvent, RefObject, useState } from "react";

interface ShopListProps {
  numberOfStalls: number;
  shopListRef: RefObject<HTMLDivElement>;
}

const ShopList: FC<ShopListProps> = ({ numberOfStalls, shopListRef }) => {
  const [dragState, setDragState] = useState({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
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
              <CardActionArea>
                <CardMediaContainer
                  imageSrc={
                    "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741345165/cubifood_light_j6lpn9.svg"
                  }
                />
                <CardContent className={styles.contentData}>
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
  );
};

export default ShopList;

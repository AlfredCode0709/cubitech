import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import styles from "../../styles/cubigift.module.scss";
import { FC, MouseEvent, useEffect, useRef, useState } from "react";
import { cardList } from "./cardList";

interface GiftCardSlideShowProps {
  onCardSelect: (title: string, message: string) => void;
}

const GiftCardSlideShow: FC<GiftCardSlideShowProps> = ({ onCardSelect }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);
  const [disableSkipPrev, setDisableSkipPrev] = useState(false);
  const [showPagination, setShowPagination] = useState(false);

  useEffect(() => {
    const updatePaginationState = () => {
      const container = containerRef.current;
      if (container) {
        const atStart = container.scrollLeft === 0;
        const atEnd =
          Math.ceil(container.scrollLeft + container.clientWidth) >=
          container.scrollWidth;
        const noScrollNeeded = container.scrollWidth <= container.clientWidth;

        setDisablePrev(atStart);
        setDisableNext(atEnd);
        setDisableSkipPrev(atStart);
        setShowPagination(!noScrollNeeded);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", updatePaginationState);
      updatePaginationState();
    }

    window.addEventListener("resize", updatePaginationState);

    return () => {
      if (container) {
        container.removeEventListener("scroll", updatePaginationState);
      }
      window.removeEventListener("resize", updatePaginationState);
    };
  }, []);

  const handleMouseDown = (e: MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handlePageChange = (direction: "prev" | "next") => {
    const container = containerRef.current;
    if (container) {
      const clientWidth = container.clientWidth;
      const scrollAmount = clientWidth / 2;
      container.scrollBy({
        left: direction === "prev" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleSkipToLeft = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box className={styles.giftCardSlideshow}>
      <Grid container className={styles.header}>
        <Grid size={9}>
          <Typography className={styles.heading}>Choose A Gift Card</Typography>
        </Grid>
        <Grid size={3}
          className={styles.paginationButtons}
          style={{ display: showPagination ? "flex" : "none" }}
        >
          <IconButton
            className={`${styles.iconButton} ${disablePrev && styles.disabled}`}
            onClick={() => handlePageChange("prev")}
            disabled={disablePrev}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton
            className={`${styles.iconButton} ${disableNext && styles.disabled}`}
            onClick={() => handlePageChange("next")}
            disabled={disableNext}
          >
            <ArrowForwardIosIcon />
          </IconButton>
          <IconButton
            className={`${styles.iconButton}`}
            onClick={handleSkipToLeft}
            disabled={disableSkipPrev}
          >
            <SkipPreviousIcon />
          </IconButton>
        </Grid>
      </Grid>

      <Box
        ref={containerRef}
        className={`${styles.cardContainer} ${isDragging && styles.dragging}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {cardList.map((card) => (
          <Box key={card.id} className={styles.cardWrapper}>
            <Card
              className={styles.card}
              variant={"outlined"}
              onClick={() => onCardSelect(card.name, card.message)}
            >
              <Avatar
                alt={"CubiGift"}
                src={"/cubitech_brands/cubigift_light.svg"}
                className={styles.avatar}
                variant={"square"}
              />
            </Card>
            <Typography className={styles.cardName}>{card.name}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default GiftCardSlideShow;

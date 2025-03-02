import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import styles from "../../styles/cubimart.module.scss";
import { FC, MouseEvent, useEffect, useRef, useState } from "react";

interface CategoryListProps {
  selectedCategory: number | null;
  onSelectCategory: (stallId: number | null) => void;
  numberOfCategories: number;
}

const CategoryList: FC<CategoryListProps> = ({
  selectedCategory,
  onSelectCategory,
  numberOfCategories,
}) => {
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
  }, [numberOfCategories]);

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
    <Box className={styles.categoryList}>
      <Grid container className={styles.data}>
        <Grid size={9}>
          <Box
            ref={containerRef}
            className={`${styles.cardContainer} ${
              isDragging && styles.dragging
            }`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
          >
            {Array.from({ length: numberOfCategories }).map((_, index) => (
              <Box key={index} className={styles.cardWrapper}>
                <Button
                  className={`${styles.categoryButton} ${
                    selectedCategory === index ? styles.focused : ""
                  }`}
                  size={"large"}
                  onClick={() => onSelectCategory(index)}
                >
                  {`Category ${index + 1}`}
                </Button>
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid
          size={3}
          className={styles.paginationButtons}
          gap={2}
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
    </Box>
  );
};

export default CategoryList;

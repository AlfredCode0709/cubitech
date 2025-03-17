import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import PaginationVariant2 from "@/components/common/pagination/PaginationVariant2";
import commonStyles from "@/styles/common.module.scss";
import styles from "@/styles/cubimart.module.scss";
import { FC, MouseEvent, RefObject, useEffect, useRef, useState } from "react";

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
  const [disableSkipToPrev, setDisableSkipToPrev] = useState(false);
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
        setDisableSkipToPrev(atStart);
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

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <Box className={styles.categoryList}>
      <Grid container className={styles.data}>
        <Grid size={9}>
          <Box
            ref={containerRef}
            className={`${styles.dataView} ${isDragging && styles.dragging}`}
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
          justifyContent={"flex-end"}
          style={{ display: showPagination ? "flex" : "none" }}
        >
          <PaginationVariant2
            className={commonStyles.iconButtonVariant2}
            containerRef={containerRef as RefObject<HTMLDivElement>}
            disablePrev={disablePrev}
            disableNext={disableNext}
            disableSkipToPrev={disableSkipToPrev}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CategoryList;

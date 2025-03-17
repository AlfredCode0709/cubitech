import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import GiftCardList from "./GiftCardList";
import PaginationVariant2 from "@/components/common/pagination/PaginationVariant2";
import commonStyles from "@/styles/common.module.scss";
import styles from "@/styles/cubigift.module.scss";
import { FC, RefObject, useEffect, useRef, useState } from "react";

interface GiftCardSlideShowProps {
  onCardSelect: (title: string, message: string) => void;
}

const GiftCardSlideShow: FC<GiftCardSlideShowProps> = ({ onCardSelect }) => {
  const giftListRef = useRef<HTMLDivElement>(null);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);
  const [disableSkipToPrev, setDisableSkipToPrev] = useState(false);
  const [showPagination, setShowPagination] = useState(false);

  useEffect(() => {
    const updatePaginationState = () => {
      const container = giftListRef.current;
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

    const container = giftListRef.current;
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

  return (
    <Box className={styles.giftCardSlideshow}>
      <Grid container className={styles.header}>
        <Grid size={9}>
          <Typography className={styles.heading}>Choose A Gift Card</Typography>
        </Grid>
        <Grid
          size={3}
          justifyContent="flex-end"
          style={{ display: showPagination ? "flex" : "none" }}
        >
          <PaginationVariant2
            className={commonStyles.iconButtonVariant2}
            containerRef={giftListRef as RefObject<HTMLDivElement>}
            disablePrev={disablePrev}
            disableNext={disableNext}
            disableSkipToPrev={disableSkipToPrev}
          />
        </Grid>
      </Grid>

      {/* Gift Card List Component */}
      <GiftCardList onCardSelect={onCardSelect} giftListRef={giftListRef} />
    </Box>
  );
};

export default GiftCardSlideShow;

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import commonStyles from "../../styles/common.module.scss";
import { FC, RefObject } from "react";

interface PaginationVariant2Props {
  className: string;
  containerRef: RefObject<HTMLDivElement>;
  disablePrev: boolean;
  disableNext: boolean;
  disableSkipToPrev: boolean;
}

const PaginationVariant2: FC<PaginationVariant2Props> = ({
  className,
  containerRef,
  disablePrev,
  disableNext,
  disableSkipToPrev,
}) => {
  const handlePageChange = (direction: "prev" | "next") => () => {
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

  const handleSkipToPrev = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box className={commonStyles.pagination}>
      <IconButton
        className={className}
        onClick={handlePageChange("prev")}
        disabled={disablePrev}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton
        className={className}
        onClick={handlePageChange("next")}
        disabled={disableNext}
      >
        <ArrowForwardIosIcon />
      </IconButton>
      <IconButton
        className={className}
        onClick={handleSkipToPrev}
        disabled={disableSkipToPrev}
      >
        <SkipPreviousIcon />
      </IconButton>
    </Box>
  );
};

export default PaginationVariant2;

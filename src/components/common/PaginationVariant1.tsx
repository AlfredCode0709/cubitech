import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import commonStyles from "../../styles/common.module.scss";
import { FC } from "react";

interface PaginationVariant1Props {
  className: string;
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const PaginationVariant1: FC<PaginationVariant1Props> = ({
  className,
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  return (
    <Box className={commonStyles.pagination}>
      {["prev", "next"].map((dir) => (
        <IconButton
          key={dir}
          className={className}
          onClick={() =>
            setCurrentPage(currentPage + (dir === "prev" ? -1 : 1))
          }
          disabled={
            dir === "prev" ? currentPage === 1 : currentPage === totalPages
          }
        >
          {dir === "prev" ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
        </IconButton>
      ))}
    </Box>
  );
};

export default PaginationVariant1;

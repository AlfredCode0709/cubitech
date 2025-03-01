import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import commonStyles from "../../../styles/common.module.scss";
import { FC } from "react";

interface ItemActionButtonsProps {
  router: any;
  watch: any;
  reset: () => void;
  onSubmit: () => void;
}

const ItemActionButtons: FC<ItemActionButtonsProps> = ({
  router,
  watch,
  reset,
  onSubmit,
}) => {
  return (
    <Box className={commonStyles.itemActionButtons}>
      <Button
        className={commonStyles.button}
        size="large"
        variant="contained"
        startIcon={<ArrowBackIcon />}
        onClick={() => router.back()}
      >
        Back
      </Button>
      <Button
        className={commonStyles.button}
        size="large"
        variant="contained"
        onClick={() => reset()}
      >
        Reset
      </Button>
      <Button
        className={commonStyles.button}
        size="large"
        variant="contained"
        startIcon={<AddIcon />}
        disabled={!watch("option") || !watch("quantity")}
        onClick={() => onSubmit()}
      >
        Add to Cart
      </Button>
    </Box>
  );
};

export default ItemActionButtons;

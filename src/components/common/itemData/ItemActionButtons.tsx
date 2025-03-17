import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import commonStyles from "@/styles/common.module.scss";
import { FormValues } from "./ItemData";
import { UseFormWatch } from "react-hook-form";
import { useRouter } from "next/router";
import { FC } from "react";

interface ItemActionButtonsProps {
  router: ReturnType<typeof useRouter>;
  watch: UseFormWatch<FormValues>;
  reset: () => void;
  onSubmit: () => void;
  isCubiMart: boolean;
}

const ItemActionButtons: FC<ItemActionButtonsProps> = ({
  router,
  watch,
  reset,
  onSubmit,
  isCubiMart,
}) => {
  return (
    <Box className={commonStyles.itemActionButtons}>
      <Button
        className={isCubiMart === false ? commonStyles.button : ""}
        size="large"
        variant="contained"
        startIcon={<ArrowBackIcon />}
        onClick={() => router.back()}
      >
        Back
      </Button>
      <Button
        className={isCubiMart === false ? commonStyles.button : ""}
        size="large"
        variant="contained"
        onClick={() => reset()}
      >
        Reset
      </Button>
      <Button
        className={isCubiMart === false ? commonStyles.button : ""}
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

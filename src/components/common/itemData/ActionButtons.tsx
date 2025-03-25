import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import commonStyles from "@/styles/common.module.scss";
import { FormValues } from "./ItemData";
import { UseFormWatch } from "react-hook-form";
import { useRouter } from "next/router";
import { FC } from "react";

interface ActionButtonsProps {
  router: ReturnType<typeof useRouter>;
  watch: UseFormWatch<FormValues>;
  reset: () => void;
  isCubiMart: boolean;
}

const ActionButtons: FC<ActionButtonsProps> = ({
  router,
  watch,
  reset,
  isCubiMart,
}) => {
  return (
    <Box className={commonStyles.actionButtons}>
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
        type={'submit'}
      >
        Add to Cart
      </Button>
    </Box>
  );
};

export default ActionButtons;

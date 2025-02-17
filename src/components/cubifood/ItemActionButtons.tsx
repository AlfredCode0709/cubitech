import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from "../../styles/cubifood.module.scss";
import { FC } from "react";

interface ItemActionButtonsProps {
  user: any;
  router: any;
  watch: any;
  reset: () => void;
  onSubmit: () => void;
}

const ItemActionButtons: FC<ItemActionButtonsProps> = ({
  user,
  router,
  watch,
  reset,
  onSubmit,
}) => {
  return (
    <Box>
      <Button
        className={styles.button}
        size="large"
        variant="contained"
        startIcon={<ArrowBackIcon />}
        onClick={() => router.back()}
      >
        Back
      </Button>
      <Button
        className={styles.button}
        size="large"
        variant="contained"
        onClick={() => reset()}
      >
        Reset
      </Button>
      <Button
        className={styles.button}
        size="large"
        variant="contained"
        startIcon={<AddIcon />}
        disabled={!watch("option") || !watch("quantity")}
        onClick={() => {
          if (!user) {
            router.push("/auth/login");
          } else {
            onSubmit();
          }
        }}
      >
        Add to Cart
      </Button>
    </Box>
  );
};

export default ItemActionButtons;

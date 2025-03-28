import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "@/styles/contactus.module.scss";
import { FC } from "react";

interface ActionButtonsProps {
  reset: () => void;
  loading?: boolean;
}

const ActionButtons: FC<ActionButtonsProps> = ({ reset, loading }) => {
  return (
    <Stack className={styles.actionButtons}>
      <Button
        className={styles.button}
        variant="contained"
        color="primary"
        size="large"
        fullWidth
        onClick={() => reset()}
      >
        Reset
      </Button>
      <Button
        className={styles.button}
        variant="contained"
        color="primary"
        size="large"
        type="submit"
        fullWidth
      >
        {loading ? (
          <CircularProgress size={24} sx={{ color: "white" }} />
        ) : (
          "Send Feedback"
        )}
      </Button>
    </Stack>
  );
};

export default ActionButtons;

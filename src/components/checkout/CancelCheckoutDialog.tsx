import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import styles from "@/styles/checkout.module.scss";
import { FC } from "react";

interface CancelCheckoutDialogProps {
  open: boolean;
  handleCloseDialog: () => void;
  handleConfirmClear: () => void;
}

const CancelCheckoutDialog: FC<CancelCheckoutDialogProps> = ({
  open,
  handleCloseDialog,
  handleConfirmClear,
}) => {
  return (
    <Dialog
      className={styles.cancelCheckoutDialog}
      open={open}
      onClose={handleCloseDialog}
      disablePortal
      disableScrollLock
    >
      <DialogTitle className={styles.dialogTitle}>
        Are you sure to cancel checkout?
      </DialogTitle>
      <DialogContent>This action cannot be undone.</DialogContent>
      <DialogActions className={styles.dialogActions}>
        <Button onClick={handleCloseDialog} color={"primary"}>
          Keep Checkout
        </Button>
        <Button onClick={handleConfirmClear} color={"error"} autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CancelCheckoutDialog;

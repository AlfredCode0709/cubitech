import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { FC } from "react";

interface ClearCartDialogProps {
  open: boolean;
  handleCloseDialog: () => void;
  handleConfirmClear: () => void;
}

const ClearCartDialog: FC<ClearCartDialogProps> = ({
  open,
  handleCloseDialog,
  handleConfirmClear,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleCloseDialog}
      disablePortal
      disableScrollLock
    >
      <DialogTitle>Remove all items from your cart?</DialogTitle>
      <DialogContent>This action cannot be undone.</DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog} color={"primary"}>
          Keep Items
        </Button>
        <Button onClick={handleConfirmClear} color={"error"} autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ClearCartDialog;

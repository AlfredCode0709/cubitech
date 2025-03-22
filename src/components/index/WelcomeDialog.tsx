import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import styles from "@/styles/index.module.scss";
import { FC, useEffect, useState } from "react";

const WelcomeDialog: FC = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const hasSeenDialog = localStorage.getItem("seenWelcomeDialog");
    if (!hasSeenDialog) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("seenWelcomeDialog", "true");
  };

  return (
    <Dialog
      className={styles.welcomeDialog}
      open={open}
      onClose={handleClose}
      fullWidth
      disablePortal
      disableScrollLock
    >
      <DialogTitle className={styles.dialogTitle}>
        Welcome to Cubitech
      </DialogTitle>
      <DialogContent>
        <Typography>
          This website is designed for display purposes (not for commercial
          use). <br />
          Please refer to the{" "}
          <Link className={styles.link} href={"/developer"}>
            Developer Portal
          </Link>{" "}for latest developments.
        </Typography>
      </DialogContent>
      <DialogActions className={styles.dialogActions}>
        <Button onClick={handleClose} color={"primary"}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default WelcomeDialog;

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import styles from "@/styles/home.module.scss";
import { FC, Fragment, useEffect, useState } from "react";

const WelcomeDialog: FC = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const hasSeenDialog = localStorage.getItem("seenWelcomeDialog");
    if (!hasSeenDialog) {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("seenWelcomeDialog", "true");
  };

  return (
    <Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        className={styles.welcomeDialogDesktop}
        sx={{ display: { xs: "none", md: "block" } }}
      >
        <DialogTitle className={styles.dialogTitle}>
          Cubitech: Project Showcase
        </DialogTitle>
        <DialogContent>
          <Typography className={styles.text}>
            Welcome to my regularly updated portfolio.
            <br />
            Explore the{" "}
            <Link className={styles.link} href={"/dev"}>
              Developer Portal
            </Link>{" "}
            for the latest developments.
          </Typography>
        </DialogContent>
        <DialogActions className={styles.dialogActions}>
          <Button onClick={handleClose} color={"primary"}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={open}
        onClose={handleClose}
        className={styles.welcomeDialogMobile}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <DialogTitle className={styles.dialogTitle}>
          Cubitech: Project Showcase
        </DialogTitle>
        <DialogContent>
          <Typography className={styles.text}>
            Welcome to my regularly updated portfolio.
            <br />
            Explore the{" "}
            <Link className={styles.link} href={"/dev"}>
              Developer Portal
            </Link>{" "}
            for the latest developments.
          </Typography>
        </DialogContent>
        <DialogActions className={styles.dialogActions}>
          <Button onClick={handleClose} color={"primary"} size={'small'}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default WelcomeDialog;

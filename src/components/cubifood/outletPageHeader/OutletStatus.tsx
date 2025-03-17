import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MapIcon from "@mui/icons-material/Map";
import styles from "@/styles/cubifood.module.scss";
import { FC, Fragment, useEffect, useRef, useState } from "react";

const OutletStatus: FC = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogPosition, setDialogPosition] = useState<{
    top: number;
    left: number;
  }>({
    top: 0,
    left: 0,
  });

  const timeRef = useRef<HTMLDivElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  const handleDialogOpen = () => {
    if (timeRef.current) {
      const rect = timeRef.current.getBoundingClientRect();
      setDialogPosition({
        top: rect.bottom + window.scrollY + 20,
        left: rect.left + window.scrollX + rect.width / 2,
      });
    }
    setOpenDialog(true);
  };

  const handleDialogClose = () => setOpenDialog(false);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node) &&
        timeRef.current &&
        !timeRef.current.contains(event.target as Node)
      ) {
        setOpenDialog(false);
      }
    };

    if (openDialog) document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, [openDialog]);

  return (
    <Fragment>
      <Stack className={styles.secondSection}>
        <Typography className={styles.distance}>1.99 km • 19 stalls</Typography>
      </Stack>
      <Stack className={styles.thirdSection}>
        <Chip className={styles.chip} color="success" label="Open" />
        <Typography
          ref={timeRef}
          className={styles.operatingHours}
          onClick={handleDialogOpen}
          sx={{ cursor: "pointer" }}
        >
          6.30am - 9.30pm
        </Typography>
        <IconButton className={styles.viewMapButton} size="large">
          <MapIcon />
        </IconButton>
      </Stack>

      <Card
        ref={dialogRef}
        onClick={handleDialogClose}
        className={`${styles.operatingHoursBox} ${
          openDialog ? styles.open : ""
        }`}
        style={{
          top: `${dialogPosition.top}px`,
          left: `${dialogPosition.left}px`,
        }}
      >
        <Typography variant="h6">Operating Hours</Typography>
        <Box className={styles.operatingHoursRow}>
          <Typography>Mon - Fri</Typography>
          <Typography>6.30am - 9.30pm</Typography>
        </Box>
        <Box className={styles.operatingHoursRow}>
          <Typography>Sat/Sun/PH</Typography>
          <Typography>6.30am - 10.30pm</Typography>
        </Box>
      </Card>
    </Fragment>
  );
};

export default OutletStatus;

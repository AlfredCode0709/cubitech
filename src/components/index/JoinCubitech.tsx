import ArrowForward from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styles from "../../styles/index.module.scss";

const JoinCubitech: React.FC<any> = () => {
  return (
    <Box className={styles.joinCubitechContainer}>
      <Grid container className={styles.gridContainer}>
        <Grid item xs={8} className={styles.leftGrid}>
          <Typography className={styles.title}>Join Cubitech Today</Typography>
          <Typography className={styles.subtitle}>
            Join us for exclusive promotions and the latest updates on events!
          </Typography>
        </Grid>
        <Grid item xs={4} className={styles.rightGrid}>
          <Button
            startIcon={<ArrowForward />}
            color={"primary"}
            variant={"contained"}
            size={"large"}
          >
            Register Now
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default JoinCubitech;

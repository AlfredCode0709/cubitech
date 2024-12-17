import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import styles from "../../styles/about.module.scss";

const DevelopingCubitech: React.FC = () => {
  return (
    <Box className={styles.container1}>
      <Grid container className={styles.gridContainer}>
        <Grid item xs={6} className={styles.leftGrid}>
          <Image
            src={"./about/block2.svg"}
            alt={"Developing Cubitech"}
            width={480} // 1920
            height={270} // 1080
          />
        </Grid>
        <Grid item xs={6}>
          <Box className={styles.rightGridBox}>
            <Typography className={styles.title}>
              Developing Cubitech
            </Typography>
            <Typography className={styles.subtitle}>
              Cubitech, a growing start-up, is gaining recognition as users
              switch from conventional finance apps to a new, innovative way to
              manage finances.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DevelopingCubitech;

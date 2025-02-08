import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import styles from "../../styles/about.module.scss";

const DevelopingCubitech: React.FC = () => {
  return (
    <Box className={styles.container}>
      <Grid container className={styles.gridContainer}>
        <Grid size={6} className={styles.leftGrid}>
          <Image
            src={"./about/block2.svg"}
            alt={"Developing Cubitech"}
            width={480}
            height={270}
            style={{ display: 'block' }}
          />
        </Grid>
        <Grid size={6}>
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

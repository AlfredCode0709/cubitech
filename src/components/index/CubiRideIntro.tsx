import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import styles from "../../styles/index.module.scss";

const CubiRideIntro: React.FC<any> = () => {
  return (
    <Box className={styles.cubiRideIntroContainer}>
      <Grid container className={styles.gridContainer}>
        <Grid item xs={6} className={styles.leftGrid}>
          <Image
            src="/index/block2.svg"
            width={480} 
            height={270} 
            alt="CubiRide"
            style={{ display: "block" }}
          />
        </Grid>
        <Grid item xs={6}>
          <Box className={styles.rightGridBox}>
            <Typography className={styles.title} component={'div'}>
              Rushing off to somewhere?
              <Typography className={styles.subtitle}>
                Let CubiRide take you to your destination!
              </Typography>
            </Typography>

            <Typography className={styles.description}>
              Elevate Your Journey: From CubiMatch to CubiSuite
            </Typography>

            <Button
              variant={"contained"}
              size={"large"}
              color={"primary"}
              href={"#"}
            >
              Book A Ride Now!
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CubiRideIntro;

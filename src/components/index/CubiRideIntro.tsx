import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import styles from "../../styles/index.module.scss";
import { FC } from "react";

const CubiRideIntro: FC<any> = () => {
  return (
    <Box className={styles.introSection} bgcolor={"primary.light"}>
      <Grid container className={styles.content}>
        <Grid size={6} className={styles.leftGrid}>
          <Image
            src="/index/block2.svg"
            width={480}
            height={270}
            alt="CubiRide"
            style={{ display: "block" }}
          />
        </Grid>
        <Grid size={6}>
          <Box className={styles.rightGridBox}>
            <Typography className={styles.title} component={"div"}>
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

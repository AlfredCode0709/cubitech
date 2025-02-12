import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import styles from "../../styles/index.module.scss";
import { FC } from "react";

const CubiPerkIntro: FC<any> = () => {
  return (
    <Box className={styles.introSection} bgcolor={"primary.main"}>
      <Grid container className={styles.content}>
        <Grid size={6}>
          <Box className={styles.leftGridBox}>
            <Typography className={styles.title} component={"div"}>
              Get more from Cubitech!
              <Typography className={styles.subtitle}>
                Boost your points with our loyalty program.
              </Typography>
            </Typography>

            <Typography className={styles.description}>
              Convert your airline miles to CubiPerk points today!
            </Typography>

            <Button
              className={styles.learnMoreButton}
              variant={"contained"}
              size={"large"}
              href={"#"}
            >
              Learn More
            </Button>
          </Box>
        </Grid>
        <Grid size={6} className={styles.rightGrid}>
          <Image
            src={"/index/block3.svg"}
            width={480}
            height={270}
            alt={"CubiPerk"}
            style={{ display: "block" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CubiPerkIntro;

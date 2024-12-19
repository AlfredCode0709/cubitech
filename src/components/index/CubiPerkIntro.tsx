import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import styles from "../../styles/index.module.scss";

const CubiPerkIntro: React.FC<any> = () => {
  return (
    <Box className={styles.cubiPerkIntroBlock}>
      <Grid container className={styles.gridContainer}>
        <Grid item xs={6}>
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
        <Grid item xs={6} className={styles.rightGrid}>
          <Image
            src={"/index/block3.svg"}
            width={480} // 1920
            height={270} // 1080
            alt={"CubiPerk"}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CubiPerkIntro;

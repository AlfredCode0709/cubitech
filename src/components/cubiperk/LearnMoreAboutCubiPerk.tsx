import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import styles from "../../styles/cubiperk.module.scss";

const LearnMoreAboutCubiPerk: React.FC<any> = () => {
  return (
    <Box className={styles.learnMoreAboutCubiPerk}>
      <Grid container className={styles.gridContainer}>
        <Grid item xs={6} className={styles.leftGrid}>
          <Image
            src={"/cubiperk/block2.svg"}
            width={480}
            height={270}
            alt={"CubiPerk"}
          />
        </Grid>
        <Grid item xs={6}>
          <Box className={styles.rightGridBox}>
            <Typography className={styles.title} component={'div'}>
              Boost Your Points with CubiPerk
              <br />
              Points Conversion!
              <Typography className={styles.subtitle} component={'div'}>
                Make the most of your miles — convert them
                <br />
                to CubiPerk points today!
              </Typography>
            </Typography>

            <Button variant={"contained"} size={"large"} color={"primary"}>
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LearnMoreAboutCubiPerk;

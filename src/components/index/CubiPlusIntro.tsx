import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styles from "../../styles/index.module.scss";
import { FC } from "react";

const CubiPlusIntro: FC<any> = () => {
  return (
    <Box className={styles.cubiPlusIntro}>
      <Typography className={styles.title} component={"div"}>
        Save More with
        <span className={styles.cubiPlus}>CUBIPlus</span>
      </Typography>

      <Grid container className={styles.content} spacing={1}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Grid item xs={2.4} key={index}>
            <Card className={styles.card} variant={"outlined"}>
              <Box className={styles.cardMediaContainer}>
                <CardMedia
                  className={styles.cardMedia}
                  component={"img"}
                  image={"/cubitech_brands/cubiplus_light.svg"}
                  alt={"CubiPlus Intro"}
                />
              </Box>
              <CardContent className={styles.cardContent}>
                <Typography className={styles.name}>Promotion Name</Typography>
                <Typography className={styles.description}>
                  Description
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CubiPlusIntro;

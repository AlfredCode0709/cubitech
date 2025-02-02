import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import styles from "../../styles/index.module.scss";
import { FC } from "react";

const TopRatedEateries: FC<any> = () => {
  return (
    <Box className={styles.topRatedEateries}>
      <Typography className={styles.title} component={"div"}>
        <Link href={"/cubifood"}>
          <span className={styles.cubiFood}>CUBIFood</span>
        </Link>
        Top Rated Eateries
      </Typography>

      <Grid container className={styles.gridContainer} spacing={1}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Grid item xs={2.4} key={index}>
            <Card className={styles.card} variant={"outlined"}>
              <Box className={styles.cardMediaContainer}>
                <CardMedia
                  className={styles.cardMedia}
                  component={"img"}
                  image={"/cubitech_brands/cubifood_light.svg"}
                  alt={"CubiFood Top Rated Eatery"}
                />
              </Box>
              <CardContent className={styles.cardContent}>
                <Typography className={styles.name}>Restaurant Name</Typography>
                <Typography className={styles.address}>
                  Restaurant Address
                </Typography>
                <Rating className={styles.rating} defaultValue={5} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TopRatedEateries;

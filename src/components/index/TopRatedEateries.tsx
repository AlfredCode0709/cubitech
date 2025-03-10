import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid2";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import CardMediaContainer from "../common/CardMediaContainer";
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

      <Grid container className={styles.content} spacing={1}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Grid size={2.4} key={index}>
            <Card className={styles.eateryCard} variant={"outlined"}>
              <CardMediaContainer
                imageSrc={
                  "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741345165/cubifood_light_j6lpn9.svg"
                }
              />
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

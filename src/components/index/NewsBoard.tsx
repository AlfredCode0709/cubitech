import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styles from "../../styles/index.module.scss";
import { FC } from "react";

const NewsBoard: FC<any> = () => {
  return (
    <Box className={styles.newsBoard}>
      <Typography className={styles.title}>News Board</Typography>

      <Grid container paddingY={"2.5%"} spacing={1}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Grid item xs={3} key={index}>
            <Card className={styles.card} variant={"outlined"}>
              <Box className={styles.cardMediaContainer}>
                <CardMedia
                  className={styles.cardMedia}
                  component={"img"}
                  image={"/cubitech_brands/cubitech_light.svg"}
                  alt={"Newsboard Item"}
                />
              </Box>
              <CardContent className={styles.cardContent}>
                <Typography className={styles.title}>News Title</Typography>
                <Typography className={styles.description}>
                  News Description
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NewsBoard;

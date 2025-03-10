import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMediaContainer from "../common/CardMediaContainer";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import styles from "../../styles/index.module.scss";
import { FC } from "react";

const NewsBoard: FC<any> = () => {
  return (
    <Box className={styles.newsBoard}>
      <Typography className={styles.title}>News Board</Typography>

      <Grid container paddingY={"2.5%"} spacing={1}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Grid size={3} key={index}>
            <Card className={styles.card} variant={"outlined"}>
              <CardMediaContainer
                imageSrc={
                  "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741345140/cubitech_light_qhxj6v.svg"
                }
              />
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

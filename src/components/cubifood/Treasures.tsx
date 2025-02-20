import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import CardMediaContainer from "../common/CardMediaContainer";
import styles from "../../styles/cubifood.module.scss";
import { FC } from "react";

const TreasureCard: FC<{ isMain?: boolean }> = ({ isMain = false }) => (
  <Card
    variant={"outlined"}
    className={isMain ? styles.topTreasure : styles.treasure}
  >
    <CardActionArea>
      <CardMediaContainer
        imageSrc={"/cubitech_brands/cubifood_light.svg"}
        alt={"CubiFood Treasure"}
      />
      <CardContent className={styles.cardContent}>
        <Typography className={styles.name}>Treasure Name</Typography>
        <Typography className={styles.description}>
          Treasure Description
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      {isMain ? (
        <Button className={styles.button} size={"large"}>
          Learn More
        </Button>
      ) : (
        <>
          <Button className={styles.button}>View</Button>
          <Button className={styles.button}>Learn More</Button>
        </>
      )}
    </CardActions>
  </Card>
);

const Treasures: FC<any> = () => {
  return (
    <Box className={styles.treasures}>
      <Typography className={styles.title}>Top Treasures</Typography>
      <Grid container className={styles.treasuresView} spacing={2}>
        {/* Main treasure card */}
        <Grid size={4}>
          <TreasureCard isMain />
        </Grid>

        {/* Additional treasure cards */}
        <Grid size={8} container spacing={2}>
          {Array.from({ length: 6 }).map((_, index) => (
            <Grid size={4} key={index}>
              <TreasureCard />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Treasures;

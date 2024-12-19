import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styles from "../../styles/cubifood.module.scss";

const TreasureCard: React.FC<{ isMain?: boolean }> = ({ isMain = false }) => (
  <Card
    variant={"outlined"}
    className={isMain ? styles.topTreasureCard : styles.treasureCard}
  >
    <CardActionArea>
      <Box className={styles.cardMediaContainer}>
        <CardMedia
          className={styles.cardMedia}
          component={"img"}
          image={"./cubitech_brands/cubifood_light.svg"}
          alt={"CubiFood Treasure"}
        />
      </Box>
      <CardContent className={styles.cardContent}>
        <Typography className={styles.name}>Treasure Name</Typography>
        <Typography className={styles.description}>
          Treasure Description
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      {isMain ? (
        <Button color={"primary"} size={"large"}>
          Learn More
        </Button>
      ) : (
        <>
          <Button color={"primary"}>View</Button>
          <Button color={"primary"}>Learn More</Button>
        </>
      )}
    </CardActions>
  </Card>
);

const TopTreasures: React.FC = () => (
  <Box className={styles.topTreasuresBlock}>
    <Typography className={styles.title}>Top Treasures</Typography>
    <Grid container className={styles.gridContainer} spacing={2}>
      {/* Main treasure card */}
      <Grid item xs={4}>
        <TreasureCard isMain />
      </Grid>

      {/* Additional treasure cards */}
      <Grid item xs={8} container spacing={2}>
        {Array.from({ length: 6 }).map((_, index) => (
          <Grid item xs={4} key={index}>
            <TreasureCard />
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Box>
);

export default TopTreasures;

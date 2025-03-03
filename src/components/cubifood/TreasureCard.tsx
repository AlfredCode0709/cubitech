import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
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
      {/* Card Media */}
      <CardMediaContainer imageSrc={"/cubitech_brands/cubifood_light.svg"} />

      {/* Card Content */}
      <CardContent className={styles.cardContent}>
        <Typography className={styles.name}>Treasure Name</Typography>
        <Typography className={styles.descr}>Treasure Description</Typography>
      </CardContent>
    </CardActionArea>

    {/* Card Actions */}
    <CardActions>
      {!isMain && <Button className={styles.button}>View</Button>}
      <Button className={styles.button} size={isMain ? "large" : "medium"}>
        Learn More
      </Button>
    </CardActions>
  </Card>
);

export default TreasureCard;

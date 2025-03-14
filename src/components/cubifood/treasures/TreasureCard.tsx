import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMediaContainer from "@/components/common/card/CardMediaContainer";
import Typography from "@mui/material/Typography";
import styles from "@/styles/cubifood.module.scss";
import { CSSProperties, FC } from "react";

const TreasureCard: FC<{ isMain?: boolean }> = ({ isMain = false }) => (
  <Card
    className={styles.treasure}
    variant={"outlined"}
    sx={
      {
        "--height": isMain ? "100%" : null,
      } as CSSProperties
    }
  >
    <CardActionArea>
      {/* Card Media */}
      <CardMediaContainer
        imageSrc={
          "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741345165/cubifood_light_j6lpn9.svg"
        }
      />

      {/* Card Content */}
      <CardContent className={styles.contentData}>
        <Typography
          className={styles.name}
          sx={
            {
              "--name-font-size": `${isMain ? 20 : 16}px`,
            } as CSSProperties
          }
        >
          Treasure Name
        </Typography>
        <Typography
          className={styles.descr}
          sx={
            {
              "--descr-font-size": `${isMain ? 18 : 14}px`,
            } as CSSProperties
          }
        >
          Treasure Description
        </Typography>
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

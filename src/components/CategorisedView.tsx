import Add from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import styles from "../styles/common.module.scss";

interface CategorisedViewProps {
  imageSrc: string;
}

const CategorisedView: React.FC<CategorisedViewProps> = ({ imageSrc }) => {
  return (
    <Box className={styles.categorisedViewBlock}>
      <Grid container className={styles.gridContainer} spacing={0.5}>
        {Array.from({ length: 12 }).map((_, index) => (
          <Grid item xs={2} key={index}>
            <Card variant={"outlined"} className={styles.categorisedItemCard}>
              <Box className={styles.cardMediaContainer}>
                <CardMedia
                  className={styles.cardMedia}
                  component={"img"}
                  image={imageSrc}
                  alt={"CategorisedItem"}
                />
              </Box>
              <CardContent className={styles.cardContent}>
                <Typography className={styles.name}>Menu Item Name</Typography>
                <Typography className={styles.price}>$9.99</Typography>
                <Rating className={styles.rating} defaultValue={5} />
              </CardContent>
              <CardActions className={styles.cardActions}>
                <Button
                  startIcon={<Add />}
                  size={"small"}
                  variant={"contained"}
                >
                  Add To Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategorisedView;

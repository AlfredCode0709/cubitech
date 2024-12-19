import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import styles from "../../styles/index.module.scss";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Add from "@mui/icons-material/Add";

interface PeekViewProps {
  title: string; // Dynamic title prop
}

const PeekView: React.FC<PeekViewProps> = ({ title }) => {
  // Dynamically set the image based on the title
  const imagePath =
    title === "CUBIFood"
      ? "./cubitech_brands/cubifood_light.svg"
      : title === "CUBIMart"
        ? "./cubitech_brands/cubimart_light.svg"
        : "./cubitech_brands/default_image.svg"; // Fallback image

  // Conditional styling for the second part of the title
  const titleSubColor = title === "CUBIFood" ? "#09b96d" : "#bf3953";

  return (
    <Box
      className={styles.peekViewBlock}
      borderTop={title === "CUBIFood" ? 0 : "1px solid var(--divider-color)"}
    >
      <Typography className={styles.peekViewTitle} variant="h4">
        {title.substring(0, 4)}
        <span style={{ color: titleSubColor }}>{title.substring(4)}</span>
      </Typography>

      <Grid container className={styles.gridContainer} spacing={0.5}>
        {Array.from({ length: 6 }).map((_, index) => (
          <Grid item xs={2} key={index}>
            <Card variant={"outlined"} className={styles.menuItemCard}>
              <Box className={styles.cardMediaContainer}>
                <CardMedia
                  className={styles.cardMedia}
                  component={"img"}
                  image={imagePath}
                  alt={"Menu Item Image"}
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

export default PeekView;

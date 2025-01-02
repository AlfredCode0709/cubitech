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
import Link from "next/link";
import styles from "../../styles/index.module.scss";

/**
 * Props for the PeekView component.
 */
interface PeekViewProps {
  title: string;
}

const PeekView: React.FC<PeekViewProps> = ({ title }) => {
  /* Determines the image path based on the title */
  const imagePath =
    title === "CUBIFood"
      ? "./cubitech_brands/cubifood_light.svg"
      : title === "CUBIMart"
      ? "./cubitech_brands/cubimart_light.svg"
      : "./cubitech_brands/cubitech_light.svg";

  /* Determines the color for the second part of the title */
  const titleSubColor = title === "CUBIFood" ? "#09b96d" : "#bf3953";

  return (
    <Box
      className={styles.peekView}
      borderTop={title === "CUBIFood" ? 0 : "1px solid var(--divider-color)"}
    >
      {/* Link to the corresponding page based on the title */}
      <Link href={title === "CUBIFood" ? "/cubifood" : "/cubimart"}>
        <Typography className={styles.title}>
          {title.substring(0, 4)}
          <span style={{ color: titleSubColor }}>{title.substring(4)}</span>
        </Typography>
      </Link>

      <Grid container className={styles.gridContainer} spacing={0.5}>
        {Array.from({ length: 6 }).map((_, index) => (
          <Grid item xs={2} key={index}>
            <Card variant={"outlined"} className={styles.card}>
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

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
import commonStyles from "../styles/common.module.scss";

interface CategorisedViewProps {
  imageSrc: string;
}

const CategorisedView: React.FC<CategorisedViewProps> = ({ imageSrc }) => {
  return (
    <Box className={commonStyles.categorisedView}>
      <Grid container className={commonStyles.gridContainer} spacing={0.5}>
        {Array.from({ length: 12 }).map((_, index) => (
          <Grid item xs={2} key={index}>
            <Card variant={"outlined"} className={commonStyles.card}>
              <Box className={commonStyles.cardMediaContainer}>
                <CardMedia
                  className={commonStyles.cardMedia}
                  component={"img"}
                  image={imageSrc}
                  alt={"CategorisedItem"}
                />
              </Box>
              <CardContent className={commonStyles.cardContent}>
                <Typography className={commonStyles.name}>
                  Menu Item Name
                </Typography>
                <Typography className={commonStyles.price}>$9.99</Typography>
                <Rating className={commonStyles.rating} defaultValue={5} />
              </CardContent>
              <CardActions className={commonStyles.cardActions}>
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

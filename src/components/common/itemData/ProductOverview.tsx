import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import LinearProgress from "@mui/material/LinearProgress";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import commonStyles from "@/styles/common.module.scss";
import { FC, Fragment } from "react";

const ProductOverview: FC = () => {
  const ratingsData = [
    { index: 1, rating: 5, progress: 90 },
    { index: 2, rating: 4, progress: 75 },
    { index: 3, rating: 3, progress: 50 },
    { index: 4, rating: 2, progress: 30 },
    { index: 5, rating: 1, progress: 10 },
  ];

  return (
    <Grid size={12} container spacing={2} paddingTop={"1.75%"}>
      <Grid size={8}>
        <Card className={commonStyles.productData} variant={"outlined"}>
          <Typography className={commonStyles.productDetailsTitle}>
            Product Details
          </Typography>
          <Typography className={commonStyles.productDescription}>
            Product Description
          </Typography>
        </Card>
      </Grid>
      <Grid size={4}>
        <Card className={commonStyles.ratingsData} variant={"outlined"}>
          <Typography className={commonStyles.ratingsReviewsTitle}>
            Ratings & Reviews
          </Typography>
          <Box className={commonStyles.ratingRow}>
            <Typography className={commonStyles.rating}>
              <span className={commonStyles.score}>4.9</span>/5
            </Typography>
            <Rating defaultValue={5} />
          </Box>
          <Typography className={commonStyles.numberOfReviews}>
            99 reviews
          </Typography>

          <Grid container className={commonStyles.ratingTable} spacing={1}>
            {ratingsData.map(({ index, rating, progress }) => (
              <Fragment key={index}>
                <Grid size={5}>
                  <Rating
                    className={commonStyles.rating}
                    value={rating}
                    size={"small"}
                    readOnly
                  />
                </Grid>
                <Grid size={5}>
                  <LinearProgress
                    color={"warning"}
                    variant={"determinate"}
                    value={progress}
                  />
                </Grid>
                <Grid size={2} textAlign={"right"}>
                  <Typography>{progress}</Typography>
                </Grid>
              </Fragment>
            ))}
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProductOverview;

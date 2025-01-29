import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styles from "../../styles/common.module.scss";

interface PromotionsProps {
  title: string;
  bgColor: string;
  titleColor: string;
  imageSrc: string;
}

const Promotions: React.FC<PromotionsProps> = ({
  title,
  bgColor,
  titleColor,
  imageSrc,
}) => {
  return (
    <Box className={styles.promotion} bgcolor={bgColor}>
      <Typography className={styles.title} color={titleColor}>
        {title}
      </Typography>

      <Grid container className={styles.gridContainer} spacing={1}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Grid item xs={3} key={index}>
            <Card variant={"outlined"} className={styles.card}>
              <Box className={styles.cardMediaContainer}>
                <CardMedia
                  className={styles.cardMedia}
                  component={"img"}
                  image={imageSrc}
                  alt={"Promotion"}
                />
              </Box>
              <CardContent className={styles.cardContent}>
                <Typography className={styles.name}>Promotion Name</Typography>
                <Typography className={styles.description}>Description</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Promotions;

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import CardMediaContainer from "./CardMediaContainer";
import commonStyles from "../../styles/common.module.scss";
import { FC } from "react";

interface PromotionsProps {
  title: string;
  bgColor: string;
  titleColor: string;
  imageSrc: string;
}

const Promotions: FC<PromotionsProps> = ({
  title,
  bgColor,
  titleColor,
  imageSrc,
}) => {
  return (
    <Box className={commonStyles.promotion} bgcolor={bgColor}>
      <Typography className={commonStyles.title} color={titleColor}>
        {title}
      </Typography>

      <Grid container className={commonStyles.gridContainer} spacing={1}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Grid size={3} key={index}>
            <Card variant={"outlined"} className={commonStyles.card}>
              <CardMediaContainer imageSrc={imageSrc} alt={"Promotions"} />
              <CardContent className={commonStyles.cardContent}>
                <Typography className={commonStyles.name}>
                  Promotion Name
                </Typography>
                <Typography className={commonStyles.description}>
                  Description
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Promotions;

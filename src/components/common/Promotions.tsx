import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import ContentCard from "./ContentCard";
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
            <ContentCard
              imageSrc={imageSrc}
              title={"Promotion Name"}
              description={"Description"}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Promotions;

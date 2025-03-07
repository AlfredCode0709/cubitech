import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import InfoCard from "./InfoCard";
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

      <Grid container className={commonStyles.content} spacing={1}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Grid size={3} key={index}>
            <InfoCard
              imageSrc={imageSrc}
              title={"Promotion Name"}
              description={"Description"}
              titleFontSize={18}
              descrFontSize={14}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Promotions;

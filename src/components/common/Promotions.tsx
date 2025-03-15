import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import InfoCard from "./card/InfoCard";
import commonStyles from "@/styles/common.module.scss";
import { FC } from "react";

interface PromotionsProps {
  header: string;
  title: string;
  descr: string;
  titleFontSize: number;
  descrFontSize: number;
  bgColor?: string;
  color?: string;
  imageSrc: string;
}

const Promotions: FC<PromotionsProps> = ({
  header,
  title,
  descr,
  titleFontSize,
  descrFontSize,
  bgColor,
  color,
  imageSrc,
}) => {
  return (
    <Box className={commonStyles.promotion} bgcolor={bgColor || 'var(--primary-light)'}>
      <Typography className={commonStyles.title} color={color || 'var(--primary-main)'}>
        {header}
      </Typography>

      <Grid container className={commonStyles.content} spacing={1}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Grid size={3} key={index}>
            <InfoCard
              imageSrc={imageSrc}
              title={title}
              descr={descr}
              titleFontSize={titleFontSize}
              descrFontSize={descrFontSize}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Promotions;

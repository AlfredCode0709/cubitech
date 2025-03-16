import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMediaContainer from "./CardMediaContainer";
import commonStyles from "@/styles/common.module.scss";
import { CSSProperties, FC } from "react";

interface InfoCardProps {
  imageSrc: string;
  title: string;
  descr: string;
  titleFontSize: number;
  descrFontSize: number;
}

const InfoCard: FC<InfoCardProps> = ({
  imageSrc,
  title,
  descr,
  titleFontSize,
  descrFontSize,
}) => {
  return (
    <Card className={commonStyles.infoCard} variant={"outlined"}>
      {/* Card Media */}
      <CardMediaContainer imageSrc={imageSrc} />

      {/* Card Content */}
      <CardContent className={commonStyles.contentData}>
        <Typography
          className={commonStyles.title}
          sx={
            {
              "--title-font-size": `${titleFontSize || 12}px`,
            } as CSSProperties
          }
        >
          {title}
        </Typography>
        <Typography
          className={commonStyles.descr}
          sx={
            {
              "--descr-font-size": `${descrFontSize || 12}px`,
            } as CSSProperties
          }
        >
          {descr}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard;

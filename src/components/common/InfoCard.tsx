import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMediaContainer from "./CardMediaContainer";
import commonStyles from "../../styles/common.module.scss";
import { CSSProperties, FC } from "react";

interface InfoCardProps {
  imageSrc: string;
  title: string;
  description: string;
  titleFontSize: number;
  descrFontSize: number;
}

const InfoCard: FC<InfoCardProps> = ({
  imageSrc,
  title,
  description,
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
          style={
            {
              "--title-font-size": `${titleFontSize || 12}px`,
            } as CSSProperties
          }
        >
          {title}
        </Typography>
        <Typography
          className={commonStyles.descr}
          style={
            {
              "--descr-font-size": `${descrFontSize || 12}px`,
            } as CSSProperties
          }
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard;

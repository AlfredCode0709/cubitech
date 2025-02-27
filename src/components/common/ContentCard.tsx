import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import commonStyles from "../../styles/common.module.scss";
import { FC } from "react";

interface ContentCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ContentCard: FC<ContentCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <Card className={commonStyles.contentCard} elevation={0}>
      {/* Card Media */}
      <Box className={commonStyles.cardMediaContainer}>
        <CardMedia
          className={commonStyles.cardMedia}
          component={"img"}
          image={imageSrc}
          alt={"Card Media"}
        />
      </Box>

      {/* Card Content */}
      <CardContent className={commonStyles.cardContentData}>
        <Typography className={commonStyles.title}>{title}</Typography>
        <Typography className={commonStyles.description}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ContentCard;

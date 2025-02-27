import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import commonStyles from "../../styles/common.module.scss";
import { FC } from "react";

interface CatalogueItemCardProps {
  href: string;
  imageSrc: string;
  name: string;
  haveChip: boolean;
  onClick: () => void;
}

const CatalogueItemCard: FC<CatalogueItemCardProps> = ({
  href,
  imageSrc,
  name,
  haveChip,
  onClick
}) => {
  return (
    <Card className={commonStyles.catalogueItemCard} elevation={0}>
      <CardActionArea href={href} onClick={onClick}>
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
          <Typography className={commonStyles.name}>{name}</Typography>
          {haveChip === true && (
            <Chip className={commonStyles.chip} label={"9mins"} />
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CatalogueItemCard;

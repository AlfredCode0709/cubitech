import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import commonStyles from "../../styles/common.module.scss";
import { FC } from "react";

interface ItemCardProps {
  href: string;
  imageSrc: string;
  name: string;
  price: number | 0;
  haveChip: boolean;
  isCUBIMart: boolean;
  onClick: any;
}

const ItemCard: FC<ItemCardProps> = ({
  href,
  imageSrc,
  name,
  price,
  haveChip,
  isCUBIMart,
  onClick
}) => {
  return (
    <Card className={commonStyles.itemCard} variant={"outlined"}>
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
        <CardContent className={commonStyles.contentData}>
          <Typography className={commonStyles.name}>{name}</Typography>
          {price !== 0 && (
            <Typography
              className={commonStyles.price}
            >{`$${price}`}</Typography>
          )}
          {isCUBIMart === true && (
            <Rating defaultValue={5} className={commonStyles.rating} />
          )}
          {haveChip === true && (
            <Chip className={commonStyles.chip} label={"9mins"} />
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemCard;

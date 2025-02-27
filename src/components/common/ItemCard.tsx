import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import commonStyles from "../../styles/common.module.scss";
import { FC } from "react";

interface ItemCardProps {
  href: string;
  imageSrc: string;
  name: string;
  price: number | 0;
  isCUBIMart: boolean;
}

const ItemCard: FC<ItemCardProps> = ({
  href,
  imageSrc,
  name,
  price,
  isCUBIMart,
}) => {
  return (
    <Card className={commonStyles.itemCard} elevation={0}>
      <CardActionArea href={href}>
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
          {price !== 0 && (
            <Typography
              className={commonStyles.price}
            >{`$${price}`}</Typography>
          )}
          {isCUBIMart === true && (
            <Rating defaultValue={5} className={commonStyles.rating} />
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemCard;

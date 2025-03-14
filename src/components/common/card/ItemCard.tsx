import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import CardMediaContainer from "./CardMediaContainer";
import commonStyles from "@/styles/common.module.scss";
import { FC } from "react";

interface ItemCardProps {
  href?: string;
  imageSrc: string;
  name: string;
  price: number | 0;
  haveChip: boolean;
  isCUBIMart: boolean;
  otherText: boolean;
  onClick: any;
}

const ItemCard: FC<ItemCardProps> = ({
  href,
  imageSrc,
  name,
  price,
  haveChip,
  isCUBIMart,
  otherText,
  onClick,
}) => {
  return (
    <Card className={commonStyles.itemCard} variant={"outlined"}>
      {/* <CardActionArea href={href} onClick={onClick}> */}
      <CardActionArea onClick={onClick}>
        {/* Card Media */}
        <CardMediaContainer imageSrc={imageSrc} />

        {/* Card Content */}
        <CardContent className={commonStyles.contentData}>
          <Typography className={commonStyles.name}>{name}</Typography>
          {price !== 0 && (
            <Typography
              className={commonStyles.price}
            >{`$${price}`}</Typography>
          )}
          {otherText === true && (
            <Typography className={commonStyles.otherText}>
              99.9K followers
            </Typography>
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

import Card from "@mui/material/Card";
import CardMediaContainer from "../card/CardMediaContainer";
import { FC } from "react";

interface ItemImageProps {
  imageSrc: string;
}

const ItemImage: FC<ItemImageProps> = ({ imageSrc }) => {
  return (
    <Card variant={"outlined"}>
      <CardMediaContainer imageSrc={imageSrc} />
    </Card>
  );
};

export default ItemImage;

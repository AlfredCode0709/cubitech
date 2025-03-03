import Card from "@mui/material/Card";
import CardMediaContainer from "./CardMediaContainer";
import commonStyles from "../../styles/common.module.scss";
import { FC } from "react";

interface ItemImageProps {
  imageSrc: string;
}

const ItemImage: FC<ItemImageProps> = ({ imageSrc }) => {
  return (
    <Card className={commonStyles.itemImage} variant={"outlined"}>
      <CardMediaContainer imageSrc={imageSrc} />
    </Card>
  );
};

export default ItemImage;

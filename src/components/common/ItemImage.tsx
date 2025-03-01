import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import commonStyles from "../../styles/common.module.scss";

import { FC } from "react";

interface ItemImageProps {
  imageSrc: string;
}

const ItemImage: FC<ItemImageProps> = ({ imageSrc }) => {
  return (
    <Card className={commonStyles.itemImage} variant={"outlined"}>
      <Box className={commonStyles.cardMediaContainer}>
        <CardMedia
          className={commonStyles.cardMedia}
          component={"img"}
          image={imageSrc}
          alt={"Card Media"}
        />
      </Box>
    </Card>
  );
};

export default ItemImage;

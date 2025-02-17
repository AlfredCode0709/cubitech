import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { FC } from "react";
import styles from "../../styles/cubifood.module.scss";

interface ItemImageProps {
  imageSrc: string;
}

const ItemImage: FC<ItemImageProps> = ({ imageSrc }) => {
  return (
    <>
      <Card variant={"outlined"}>
        <Box className={styles.cardMediaContainer}>
          <CardMedia
            className={styles.cardMedia}
            component={"img"}
            image={imageSrc}
            alt={"Item Image"}
          />
        </Box>
      </Card>
    </>
  );
};

export default ItemImage;

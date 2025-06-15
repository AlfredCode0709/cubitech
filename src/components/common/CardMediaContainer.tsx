import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import commonStyles from "@/styles/common.module.scss";
import { FC } from "react";

interface CardMediaContainerProps {
  imageSrc: string;
}

const CardMediaContainer: FC<CardMediaContainerProps> = ({ imageSrc }) => {
  return (
    <Box className={commonStyles.cardMediaContainer}>
      <CardMedia
        className={commonStyles.cardMedia}
        component={"img"}
        image={imageSrc}
        alt={"Card Media"}
      />
    </Box>
  );
};

export default CardMediaContainer;

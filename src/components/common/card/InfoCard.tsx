import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMediaContainer from "../CardMediaContainer";
import commonStyles from "@/styles/common.module.scss";
import { FC, useEffect, useState } from "react";

interface InfoCardProps {
  cardImage?: string;
  title?: string;
  descr?: string;
}

const InfoCard: FC<InfoCardProps> = ({
  cardImage = "https://ik.imagekit.io/a1fr3d10/no_image.svg?updatedAt=1748170661829",
  title,
  descr,
}) => {
  const [cardImg, setCardImg] = useState(cardImage);

  useEffect(() => {
    const img = new window.Image();
    img.src = cardImg;
    img.onload = () => setCardImg(cardImg);
    img.onerror = () =>
      setCardImg(
        "https://ik.imagekit.io/a1fr3d10/no_image.svg?updatedAt=1748170661829"
      );
  }, [cardImg]);

  return (
    <Card className={commonStyles.infoCard} variant={"outlined"}>
      {/* Card Media */}
      <CardMediaContainer imageSrc={cardImg} />

      {/* Card Content */}
      <CardContent className={commonStyles.contentData}>
        <Typography className={commonStyles.title}>{title}</Typography>
        <Typography className={commonStyles.descr}>{descr}</Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard;

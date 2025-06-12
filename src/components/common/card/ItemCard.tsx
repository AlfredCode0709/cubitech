import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import CardMediaContainer from "../CardMediaContainer";
import commonStyles from "@/styles/common.module.scss";
import { FC, Fragment, useEffect, useState } from "react";
import Box from "@mui/material/Box";

interface ItemCardProps {
  href: string;
  cardImage?: string;
  name: string;
  price: number | 0;
  brand?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const ItemCard: FC<ItemCardProps> = ({
  href,
  cardImage = "https://ik.imagekit.io/a1fr3d10/no_image.svg?updatedAt=1748170661829",
  name,
  price,
  brand,
  onClick,
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
    <Card className={commonStyles.itemCard} variant={"outlined"}>
      <CardActionArea href={href} onClick={onClick}>
        {/* Card Media */}
        <CardMediaContainer imageSrc={cardImg} />

        {/* Card Content */}
        <CardContent className={commonStyles.contentData}>
          <Typography className={commonStyles.itemName}>{name}</Typography>
          {price !== 0 && (
            <Typography
              className={commonStyles.itemPrice}
            >{`$${price}`}</Typography>
          )}

          {brand === "CUBIMart" && (
            <Fragment>
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Rating
                  defaultValue={5}
                  className={commonStyles.desktopRatingView}
                />
              </Box>
              <Box sx={{ display: { xs: "block", md: "none" } }}>
                <Typography className={commonStyles.mobileRatingView}>
                  <StarIcon
                    sx={{ fontSize: 16 }}
                    className={commonStyles.starIcon}
                  />
                  &nbsp;<span className={commonStyles.ratingScore}>5</span>
                  &nbsp;• 99 sold
                </Typography>
              </Box>
            </Fragment>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemCard;

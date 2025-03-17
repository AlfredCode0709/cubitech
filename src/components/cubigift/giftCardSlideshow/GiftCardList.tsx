import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import styles from "@/styles/cubigift.module.scss";
import { cardList } from "./cardList";
import { FC, MouseEvent, RefObject, useState } from "react";

interface GiftCardListProps {
  onCardSelect: (title: string, message: string) => void;
  giftListRef: RefObject<HTMLDivElement | null>;
}

const GiftCardList: FC<GiftCardListProps> = ({ onCardSelect, giftListRef }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX - (giftListRef.current?.offsetLeft || 0));
    setScrollLeft(giftListRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const x = e.pageX - (giftListRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (giftListRef.current) {
      giftListRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <Box
      ref={giftListRef}
      className={`${styles.giftCardList} ${isDragging && styles.dragging}`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
    >
      {cardList.map((card) => (
        <Box key={card.id} className={styles.cardWrapper}>
          <Card
            className={styles.card}
            variant="outlined"
            onClick={() => onCardSelect(card.name, card.message)}
          >
            <Avatar
              alt="CubiGift"
              src="https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741345166/cubigift_light_yw56ji.svg"
              className={styles.avatar}
              variant="square"
            />
          </Card>
          <Typography className={styles.cardName}>{card.name}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default GiftCardList;

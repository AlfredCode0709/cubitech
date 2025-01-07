import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowBackIosNew from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import { useRef, useState, useEffect } from "react";
import styles from "../../styles/cubigift.module.scss";

const cardList = [
  {
    id: 1,
    name: "Thank You",
    message:
      "Thanks so much – here’s a little something to show my appreciation.",
  },
  {
    id: 2,
    name: "Work Buddy",
    message: "Thanks for always having my back – here’s a small gift for you.",
  },
  {
    id: 3,
    name: "Happy Birthday",
    message: "Happy Birthday! Here’s to staying forever young! :)",
  },
  {
    id: 4,
    name: "Great Job",
    message: "You nailed it! Enjoy your well-deserved success!",
  },
  {
    id: 5,
    name: "Yes, You",
    message: "Here’s a little token to say thank you!",
  },
  {
    id: 6,
    name: "Birthday Wishes",
    message: "Happy Birthday! Don’t act your age – just have fun!",
  },
  {
    id: 7,
    name: "Birthday Love",
    message: "Happy Birthday! Stay young at heart!",
  },
  {
    id: 8,
    name: "For You",
    message: "You’ll love this – enjoy your gift!",
  },
];

interface GiftCardSlideShowProps {
  onCardSelect: (title: string, message: string) => void;
}

const GiftCardSlideShow: React.FC<GiftCardSlideShowProps> = ({
  onCardSelect,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);

  useEffect(() => {
    const updatePaginationState = () => {
      const container = containerRef.current;
      if (container) {
        setDisablePrev(container.scrollLeft === 0);
        setDisableNext(
          Math.ceil(container.scrollLeft + container.clientWidth) >= container.scrollWidth
        );
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", updatePaginationState);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", updatePaginationState);
      }
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handlePageChange = (direction: "prev" | "next") => {
    const container = containerRef.current;
    if (container) {
      const clientWidth = container.clientWidth;
      const scrollAmount = clientWidth / 2;
      container.scrollBy({ left: direction === "prev" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <Box className={styles.giftCardSlideshow}>
      <Grid container className={styles.gridContainer}>
        <Grid item xs={9}>
          <Typography className={styles.heading}>
            Choose A Gift Card
          </Typography>
        </Grid>
        <Grid item xs={3} className={styles.paginationButtons} gap={2}>
          <IconButton
            aria-label="Previous slide"
            className={`${styles.iconButton} ${disablePrev && styles.disabled}`}
            onClick={() => handlePageChange("prev")}
            disabled={disablePrev}
          >
            <ArrowBackIosNew />
          </IconButton>
          <IconButton
            aria-label="Next slide"
            className={`${styles.iconButton} ${disableNext && styles.disabled}`}
            onClick={() => handlePageChange("next")}
            disabled={disableNext}
          >
            <ArrowForwardIos />
          </IconButton>
        </Grid>
      </Grid>

      <Box
        ref={containerRef}
        className={`${styles.cardContainer} ${isDragging && styles.dragging}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {cardList.map((card) => (
          <Box key={card.id} className={styles.cardWrapper}>
            <Card
              className={styles.card}
              variant={"outlined"}
              onClick={() => onCardSelect(card.name, card.message)}
            >
              <Avatar
                alt={"CubiGift"}
                src={"./cubitech_brands/cubigift_light.svg"}
                className={styles.avatar}
                variant={"square"}
              />
            </Card>
            <Typography className={styles.cardName}>
              {card.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default GiftCardSlideShow;

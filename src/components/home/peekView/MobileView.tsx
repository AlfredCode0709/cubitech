import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ItemCard from "@/components/common/card/ItemCard";
import styles from "@/styles/home.module.scss";
import { titleConfig, TitleType } from "./PeekView";
import { Swiper, SwiperSlide } from "swiper/react";
import { FC } from "react";

interface MobileViewProps {
  title: TitleType;
  totalItems: number;
}

const MobileView: FC<MobileViewProps> = ({ title, totalItems }) => {
  const { path: imageSrc, color: titleSubColor } = titleConfig[title] || {
    path: "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741345140/cubitech_light_qhxj6v.svg",
    color: "#bf3953",
  };

  const allItems = Array.from({ length: totalItems }, (_, i) => i + 1);

  return (
    <Box className={styles.mobile}>
      <Typography className={styles.title}>
        {title.substring(0, 4)}
        <span style={{ color: titleSubColor }}>{title.substring(4)}</span>
      </Typography>

      <Swiper
        spaceBetween={10}
        slidesPerView={"auto"}
        className={styles.carousel}
      >
        {allItems.map((globalIndex) => (
          <SwiperSlide key={globalIndex} style={{ width: 140 }}>
            <ItemCard
              href={"#"}
              cardImage={imageSrc}
              name={`Item Name ${globalIndex}`}
              price={9.99}
              brand={title}
              onClick={() => {}}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default MobileView;

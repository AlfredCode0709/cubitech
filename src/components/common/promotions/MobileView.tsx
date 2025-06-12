import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InfoCard from "../card/InfoCard";
import commonStyles from "@/styles/common.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FC } from "react";

interface MobileViewProps {
  header?: string;
  title?: string;
  descr?: string;
  image?: string;
}

const MobileView: FC<MobileViewProps> = ({ header, title, descr, image }) => {
  return (
    <Box className={commonStyles.mobile}>
      <Typography className={commonStyles.header}>{header}</Typography>

      <Swiper
        spaceBetween={10}
        slidesPerView={"auto"}
        className={commonStyles.carousel}
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <SwiperSlide key={index} style={{ width: 175 }}>
            <InfoCard
              cardImage={image}
              title={`${title} ${index + 1}`}
              descr={descr}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default MobileView;

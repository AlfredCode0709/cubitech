import Box from "@mui/material/Box";
import { CSSProperties, FC, useEffect, useState } from "react";
import styles from "../../styles/cubigift.module.scss";

const IntroSlideshow: FC<any> = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "./cubigift/block1a.png",
    "./cubigift/block1b.png",
    "./cubigift/block1c.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box className={styles.introSlideshow}>
      {/* Image container with sliding animation */}
      <Box
        className={styles.imageContainer}
        sx={
          {
            "--translateX": `-${currentImageIndex * 100}%`,
          } as CSSProperties
        }
      >
        {images.map((image, index) => (
          <Box
            className={styles.media}
            sx={{ backgroundImage: `url(${image})` }}
            key={index}
          />
        ))}
      </Box>

      {/* Pagination */}
      <Box className={styles.paginationContainer}>
        {images.map((_, index) => (
          <Box
            className={`${styles.paginationDot} ${
              currentImageIndex === index ? styles.paginationDotActive : ""
            }`}
            key={index}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default IntroSlideshow;

import Box from "@mui/material/Box";
import { CSSProperties, useEffect, useState } from "react";
import styles from "../../styles/cubigift.module.scss";

const IntroSlideshow: React.FC<any> = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track the current image index
  const images = [
    "./cubigift/block1a.png",
    "./cubigift/block1b.png",
    "./cubigift/block1c.png",
  ];

  // Cycle through the images automatically every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Increment by 1
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval when the component unmounts
  }, []);

  return (
    <Box className={styles.introSlideshow}>
      {/* Image container with sliding animation */}
      <Box
        className={styles.imageContainer}
        sx={
          {
            "--translateX": `-${currentImageIndex * 100}%`,
          } as CSSProperties // Type assertion for CSS variables
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
            onClick={() => setCurrentImageIndex(index)} // Change image on click
          />
        ))}
      </Box>
    </Box>
  );
};

export default IntroSlideshow;

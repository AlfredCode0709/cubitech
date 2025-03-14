import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import styles from "../../styles/about.module.scss";

const BuildingResilience: React.FC = () => {
  return (
    <Box className={styles.container} bgcolor={"primary.light"}>
      <Stack className={styles.content}>
        <Box className={styles.leftContent}>
          <Typography className={styles.title}>
            Building Economic Resilience
          </Typography>
          <Typography className={styles.subtitle}>
            We're committed to strengthening the economic resilience of this
            region for a sustainable and empowered future.
          </Typography>
        </Box>
        <Image
          src={
            "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1740621063/block3_lpowsc.svg"
          }
          alt={"Building Resilience"}
          width={480}
          height={270}
          style={{ display: "block" }}
        />
      </Stack>
    </Box>
  );
};

export default BuildingResilience;

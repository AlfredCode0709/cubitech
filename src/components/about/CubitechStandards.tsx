import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import styles from "../../styles/about.module.scss";

const CubitechStandards: React.FC = () => {
  return (
    <Box className={styles.container}>
      <Stack className={styles.content}>
        <Image
          src={
            "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1740624906/block4_dfzea5.svg"
          }
          alt={"Cubitech Standards"}
          width={480}
          height={270}
          style={{ display: "block" }}
        />
        <Box className={styles.rightContent}>
          <Typography className={styles.title}>Cubitech Standards</Typography>
          <Typography className={styles.subtitle}>
            We embrace strong corporate governance to fulfill the Cubitech
            Vision, making life easier through the seamless integration of
            diverse technologies.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default CubitechStandards;

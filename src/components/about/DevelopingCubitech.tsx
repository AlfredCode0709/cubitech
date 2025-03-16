import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import styles from "@/styles/about.module.scss";
import { FC } from "react";

const DevelopingCubitech: FC = () => {
  return (
    <Box className={styles.container}>
      <Stack className={styles.content}>
        <Image
          src={
            "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1740621061/block2_dewwvl.svg"
          }
          alt={"Developing Cubitech"}
          width={480}
          height={270}
          style={{ display: "block" }}
        />
        <Box className={styles.rightContent}>
          <Typography className={styles.title}>Developing Cubitech</Typography>
          <Typography className={styles.subtitle}>
            Cubitech, a growing start-up, is gaining recognition as users switch
            from conventional finance apps to a new, innovative way to manage
            finances.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default DevelopingCubitech;

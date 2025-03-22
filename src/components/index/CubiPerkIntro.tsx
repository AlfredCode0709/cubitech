import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import styles from "@/styles/index.module.scss";
import { FC } from "react";

const CubiPerkIntro: FC = () => {
  return (
    <Box className={styles.introSection} bgcolor={"primary.main"}>
      <Stack className={styles.content}>
        <Box className={styles.leftContent}>
          <Typography className={styles.title} component={"div"}>
            Get more from Cubitech!
            <Typography className={styles.subtitle}>
              Boost your points with our loyalty program.
            </Typography>
          </Typography>

          <Typography className={styles.descr}>
            Convert your airline miles to CubiPerk points today!
          </Typography>

          <Button
            className={styles.learnMoreButton}
            variant={"contained"}
            size={"large"}
            href={"/cubiperk"}
          >
            Learn More
          </Button>
        </Box>
        <Image
          src={
            "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741348081/block3_j1zcbj.svg"
          }
          width={480}
          height={270}
          alt={"CubiPerk"}
          style={{ display: "block" }}
        />
      </Stack>
    </Box>
  );
};

export default CubiPerkIntro;

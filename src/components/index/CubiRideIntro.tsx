import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import styles from "@/styles/index.module.scss";
import { FC } from "react";

const CubiRideIntro: FC = () => {
  return (
    <Box className={styles.introSection} bgcolor={"primary.light"}>
      <Stack className={styles.content}>
        <Image
          src={
            "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1740573114/block2_izggej.svg"
          }
          width={480}
          height={270}
          alt="CubiRide"
          style={{ display: "block" }}
        />
        <Box className={styles.rightContent}>
          <Typography className={styles.title} component={"div"}>
            Rushing off to somewhere?
            <Typography className={styles.subtitle}>
              Let CubiRide take you to your destination!
            </Typography>
          </Typography>

          <Typography className={styles.descr}>
            Elevate Your Journey: From CubiMatch to CubiSuite
          </Typography>

          <Button
            variant={"contained"}
            size={"large"}
            color={"primary"}
            href={"/cubiride"}
          >
            Learn More
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default CubiRideIntro;

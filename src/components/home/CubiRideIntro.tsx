import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import styles from "@/styles/home.module.scss";
import { FC } from "react";

const CubiRideIntro: FC = () => {
  return (
    <Box className={styles.introSection} bgcolor={"primary.light"}>
      <Box
        className={styles.desktop}
        sx={{ display: { xs: "none", md: "block" } }}
      >
        <Stack className={styles.content}>
          <Box className={styles.left}>
            <Avatar
              className={styles.avatar}
              alt={"CubiRide"}
              src={
                "https://ik.imagekit.io/a1fr3d10/home/block2.svg?updatedAt=1748247593709"
              }
              variant={"square"}
            />
          </Box>
          <Box className={styles.right}>
            <Typography className={styles.title} component={"div"}>
              Heading out somewhere?
              <Typography className={styles.subtitle}>
                Let CubiRide take you to your destination!
              </Typography>
            </Typography>

            <Typography className={styles.descr}>
              Elevate Your Journey: From CubiMatch to CubiSuite
            </Typography>

            <Button variant={"contained"} size={"large"} color={"primary"}>
              Learn More
            </Button>
          </Box>
        </Stack>
      </Box>

      <Box
        className={styles.mobile}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Stack className={styles.content}>
          <Typography className={styles.title} component={"div"}>
            Heading out somewhere?
            <Typography className={styles.subtitle}>
              Let CubiRide take you to
              <br />
              your destination!
            </Typography>
          </Typography>

          <Avatar
            className={styles.avatar}
            alt={"CubiRide"}
            src={
              "https://ik.imagekit.io/a1fr3d10/home/block2.svg?updatedAt=1748247593709"
            }
            variant={"square"}
          />

          <Typography className={styles.descr}>
            Elevate Your Journey:
            <br />
            From CubiMatch to CubiSuite
          </Typography>

          <Button variant={"contained"} color={"primary"}>
            Learn More
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default CubiRideIntro;

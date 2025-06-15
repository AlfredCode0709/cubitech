import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import styles from "@/styles/home.module.scss";
import { FC } from "react";

const CubiPerkIntro: FC = () => {
  return (
    <Box className={styles.introSection} bgcolor={"primary.main"}>
      <Box
        className={styles.desktop}
        sx={{ display: { xs: "none", md: "block" } }}
      >
        <Stack className={styles.content}>
          <Box className={styles.left}>
            <Typography
              className={styles.title}
              component={"div"}
              sx={{
                color: "white !important",
              }}
            >
              Get more from Cubitech!
              <Typography className={styles.subtitle}>
                Boost your points with our loyalty program.
              </Typography>
            </Typography>

            <Typography
              className={styles.descr}
              sx={{
                color: "#cee2fd !important",
              }}
            >
              Convert your airline miles to CubiPerk points today!
            </Typography>

            <Button
              className={styles.learnMoreButton}
              variant={"contained"}
              size={"large"}
            >
              Learn More
            </Button>
          </Box>
          <Avatar
            className={styles.avatar}
            alt={"CubiPerk"}
            src={
              "https://ik.imagekit.io/a1fr3d10/home/block3.svg?updatedAt=1749038702730"
            }
            variant={"square"}
          />
        </Stack>
      </Box>

      <Box
        className={styles.mobile}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Stack className={styles.content}>
          <Typography
            className={styles.title}
            component={"div"}
            sx={{
              color: "white !important",
            }}
          >
            Get more from Cubitech!
            <Typography className={styles.subtitle}>
              Boost your points with our
              <br />
              loyalty program.
            </Typography>
          </Typography>

          <Avatar
            className={styles.avatar}
            alt={"CubiPerk"}
            src={
              "https://ik.imagekit.io/a1fr3d10/home/block3.svg?updatedAt=1749038702730"
            }
            variant={"square"}
          />

          <Typography
            className={styles.descr}
            sx={{
              color: "#cee2fd !important",
            }}
          >
            Convert your airline miles to
            <br />
            CubiPerk points today!
          </Typography>

          <Button className={styles.learnMoreButton} variant={"contained"}>
            Learn More
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default CubiPerkIntro;

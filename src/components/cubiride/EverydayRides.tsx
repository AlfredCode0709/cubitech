import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styles from "../../styles/cubiride.module.scss";

const EverydayRides: React.FC<any> = () => {
  const everydayAvatars = [
    {
      alt: "CubiMatch",
      src: "./cubiride/cubi_match.svg",
      title: "CubiMatch",
      descr: "Connect with the nearest taxi or car at a fixed fare.",
    },
    {
      alt: "CubiShare",
      src: "./cubiride/cubi_share.svg",
      title: "CubiShare",
      descr:
        "Save by sharing a ride with others on your route, with a short wait.",
    },
    {
      alt: "CubiCar",
      src: "./cubiride/cubi_car.svg",
      title: "CubiCar",
      descr: "Dependable transportation for your everyday journeys and needs.",
    },
  ];

  return (
    <Box className={styles.everydayRides}>
      <Typography className={styles.title}>Everyday Rides</Typography>
      <Grid container className={styles.gridContainer}>
        {everydayAvatars.map((avatar, index) => (
          <Grid item xs={4} className={styles.gridItem} key={index}>
            <Avatar
              className={styles.avatar}
              key={index}
              alt={avatar.alt}
              src={avatar.src}
              component={"div"}
              variant={"square"}
            />
            <Typography className={styles.avatarTitle}>
              {avatar.title}
            </Typography>
            <Typography className={styles.avatarDescription}>
              {avatar.descr}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EverydayRides;

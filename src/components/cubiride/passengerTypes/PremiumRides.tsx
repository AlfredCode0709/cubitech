import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styles from "../../../styles/cubiride.module.scss";

const PremiumRides: React.FC<any> = () => {
  const premiumAvatars = [
    {
      alt: "CubiSuite",
      src: "./cubiride/cubi_suite.svg",
      title: "CubiSuite",
      descr:
        "Experience luxury with a first-class vehicle, ideal for executive travel.",
    },
    {
      alt: "CubiBusiness",
      src: "./cubiride/cubi_business.svg",
      title: "CubiBusiness",
      descr:
        "Enjoy a spacious, comfortable ride for business meetings and events.",
    },
    {
      alt: "CubiPremium",
      src: "./cubiride/cubi_premium.svg",
      title: "CubiPremium",
      descr:
        "Upgrade your travel with a luxurious and comfortable private ride.",
    },
  ];

  return (
    <Box className={styles.premiumRides}>
      <Typography className={styles.title}>Premium Rides</Typography>
      <Grid container className={styles.gridContainer}>
        {premiumAvatars.map((avatar, index) => (
          <Grid item className={styles.gridItem} xs={4} key={index}>
            <Avatar
              className={styles.avatar}
              key={index}
              alt={avatar.alt}
              src={avatar.src}
              component={"div"}
              variant={"square"}
            />
            <Typography className={styles.title}>
              {avatar.title}
            </Typography>
            <Typography className={styles.description}>
              {avatar.descr}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PremiumRides;

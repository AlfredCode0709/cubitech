import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styles from "../../styles/cubiride.module.scss";

const SafetyPledge: React.FC<any> = () => {
  const safetyPledgeAvatars = [
    {
      alt: "Safety Alert Button",
      src: "./cubiride/safety_alert_button.svg",
      title: "Safety Alert Button",
      descr:
        "Alert emergency contacts or authorities with just one tap during your ride.",
    },
    {
      alt: "Private Number Protection",
      src: "./cubiride/private_number_protection.svg",
      title: "Private Number Protection",
      descr:
        "Your phone number remains hidden, keeping your contact info secure.",
    },
    {
      alt: "Real-time Ride Sharing",
      src: "./cubiride/real_time_ride_sharing.svg",
      title: "Real-time Ride Sharing",
      descr:
        "Let friends or family track your ride in real-time for extra peace of mind.",
    },
  ];

  return (
    <Box className={styles.safetyPledge}>
      <Typography className={styles.title}>CubiRide Safety Pledge</Typography>

      <Grid container className={styles.gridContainer}>
        {safetyPledgeAvatars.map((avatar, index) => (
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

export default SafetyPledge;

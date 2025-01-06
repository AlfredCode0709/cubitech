import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import commonStyles from "../../styles/common.module.scss";

const SafetyPledge: React.FC<any> = () => {
  const safetyPledgeAvatars = [
    {
      alt: "Safety Alert Button",
      src: "./cubiride/safety_alert_button.svg",
      title: "Safety Alert Button",
      descr:
        "One-tap alert emergency contacts or authorities during your ride.",
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
    <Box className={commonStyles.safetyPledge}>
      <Typography className={commonStyles.title}>CubiRide Safety Pledge</Typography>

      <Grid container className={commonStyles.gridContainer}>
        {safetyPledgeAvatars.map((avatar, index) => (
          <Grid item xs={4} className={commonStyles.gridItem} key={index}>
            <Avatar
              className={commonStyles.avatar}
              key={index}
              alt={avatar.alt}
              src={avatar.src}
              component={"div"}
              variant={"square"}
            />
            <Typography className={commonStyles.title}>
              {avatar.title}
            </Typography>
            <Typography className={commonStyles.description}>
              {avatar.descr}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SafetyPledge;

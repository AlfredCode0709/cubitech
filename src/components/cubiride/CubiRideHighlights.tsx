import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import commonStyles from "../../styles/common.module.scss";

const cubirideAvatars = [
  {
    alt: "Fare Estimate Preview",
    src: "./cubiride/fare_estimate_preview.svg",
    title: "Fare Estimate Preview",
    descr: `Know your fare upfront before booking (excluding tolls and fees).`,
  },
  {
    alt: "Real-Time Ride Tracking",
    src: "./cubiride/real_time_ride_tracking.svg",
    title: "Real-Time Ride Tracking",
    descr: `Track your ride, view trip history, and get live updates on your driver.`,
  },
  {
    alt: "Seamless Payments",
    src: "./cubiride/seamless_payments.svg",
    title: "Seamless Payments",
    descr: `Pay easily via CubiPay or card in the app — no cash required.`,
  },
];

const CubiRideHighlights: React.FC<any> = () => {
  return (
    <Box className={commonStyles.highlightsSection}>
      <Typography className={commonStyles.title}>
        Why choose CubiRide?
      </Typography>

      <Grid container className={commonStyles.gridContainer}>
        {cubirideAvatars.map((avatar, index) => (
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

export default CubiRideHighlights;

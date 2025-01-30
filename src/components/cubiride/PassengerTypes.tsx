import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "../../styles/cubiride.module.scss";
import EverydayRides from "./passengerTypes/EverydayRides";
import PremiumRides from "./passengerTypes/PremiumRides";

const PassengerTypes: React.FC<any> = () => {
  return (
    <Box className={styles.passengerTypes}>
      <Typography className={styles.title}>
        CubiRide: A Ride for Every Need
      </Typography>

      {/* Everyday Rides */}
      <EverydayRides />

      {/* Premium Rides */}
      <PremiumRides />
    </Box>
  );
};

export default PassengerTypes;

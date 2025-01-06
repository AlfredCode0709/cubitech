import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "../../../styles/cubiride.module.scss";
import EverydayRides from "./EverydayRides";
import PremiumRides from "./PremiumRides";

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

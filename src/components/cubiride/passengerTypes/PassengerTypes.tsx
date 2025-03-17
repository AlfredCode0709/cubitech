import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import EverydayRides from "./EverydayRides";
import PremiumRides from "./PremiumRides";
import styles from "@/styles/cubiride.module.scss";
import { FC } from "react";

const PassengerTypes: FC = () => {
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

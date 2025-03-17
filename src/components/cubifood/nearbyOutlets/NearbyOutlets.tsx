import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import OutletSection from "./OutletSection";
import styles from "@/styles/cubifood.module.scss";
import { FC } from "react";

interface NearbyOutletsProps {
  numberOfStalls: number;
}

const NearbyOutlets: FC<NearbyOutletsProps> = ({ numberOfStalls }) => {
  return (
    <Box className={styles.nearbyOutlets}>
      <Typography className={styles.title}>Nearby Outlets</Typography>

      {Array.from({ length: 3 }).map((_, outletIndex) => (
        <OutletSection
          key={outletIndex}
          numberOfStalls={numberOfStalls}
          outletIndex={outletIndex}
        />
      ))}
    </Box>
  );
};

export default NearbyOutlets;

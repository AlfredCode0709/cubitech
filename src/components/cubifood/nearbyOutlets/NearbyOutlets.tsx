import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import OutletRowHeader from "./OutletRowHeader";
import ShopList from "./ShopList";
import styles from "@/styles/cubifood.module.scss";
import { FC, Fragment } from "react";

interface NearbyOutletsProps {
  numberOfStalls: number;
}

const NearbyOutlets: FC<NearbyOutletsProps> = ({ numberOfStalls }) => {
  return (
    <Box className={styles.nearbyOutlets}>
      <Typography className={styles.title}>Nearby Outlets</Typography>

      {Array.from({ length: 3 }).map((_, outletIndex) => (
        <Fragment key={outletIndex}>
          <OutletRowHeader outletIndex={outletIndex} />
          <ShopList numberOfStalls={numberOfStalls} outletIndex={outletIndex} />
        </Fragment>
      ))}
    </Box>
  );
};

export default NearbyOutlets;

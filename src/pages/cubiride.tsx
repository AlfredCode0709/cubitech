import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import CubiRideAspects from "@/components/cubiride/CubiRideAspects";
import EverydayRides from "@/components/cubiride/EverydayRides";
import MissionStatementBlock from "@/components/MissionStatementBlock";
import PremiumRides from "@/components/cubiride/PremiumRides";
import StartingBlock1 from "@/components/StartingBlock1";
import styles from "../styles/cubiride.module.scss";
import SafetyPledge from "@/components/cubiride/SafetyPledge";

const CubiRide: React.FC<any> = () => {
  return (
    <>
      <Head>
        <title>CubiRide | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cubitech.ico" />
      </Head>
      <main>
        {/* Starting block of CubiRide Page */}
        <StartingBlock1 backgroundImage="/cubiride/block1.png">
          Ride with CubiRide — safe and smooth.
        </StartingBlock1>

        {/* Mission Statement block */}
        <MissionStatementBlock>
          With CubiRide, we use analytics to make your journeys safer, smoother,
          and more personalised.
        </MissionStatementBlock>

        {/* CubiRide Aspects Block */}
        <CubiRideAspects />

        {/* Passenger Types Block */}
        <Box className={styles.passengerTypes}>
          <Typography className={styles.title}>Why choose CubiRide?</Typography>

          {/* Everyday Rides block */}
          <EverydayRides />

          {/* Premium Rides block */}
          <PremiumRides />
        </Box>

        {/* Safety Pledge block */}
        <SafetyPledge />
      </main>
    </>
  );
};

export default CubiRide;

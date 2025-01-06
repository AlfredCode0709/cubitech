import CubiRideHighlights from "@/components/cubiride/CubiRideHighlights";
import PassengerTypes from "@/components/cubiride/passengerTypes/PassengerTypes";
import MissionStatement from "@/components/MissionStatement";
import SafetyPledge from "@/components/cubiride/SafetyPledge";
import StartingBlock1 from "@/components/StartingBlock1";
import TravelWithCubiRide from "@/components/cubiride/TravelWithCubiRide";
import Head from "next/head";

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
        <StartingBlock1 backgroundImage={"/cubiride/block1.png"}>
          Ride with CubiRide — safe and smooth.
        </StartingBlock1>

        {/* Mission Statement */}
        <MissionStatement>
          With CubiRide, we use analytics to make your journeys safer, smoother,
          and more personalised.
        </MissionStatement>

        {/* CubiRide Highlights */}
        <CubiRideHighlights />

        {/* Passenger Types */}
        <PassengerTypes />

        {/* Safety Pledge */}
        <SafetyPledge />

        {/* Travel with CubiRide */}
        <TravelWithCubiRide />
      </main>
    </>
  );
};

export default CubiRide;

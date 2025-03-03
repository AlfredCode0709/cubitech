import Highlights from "@/components/common/Highlights";
import JoinSection from "@/components/common/JoinSection";
import MissionStatement from "@/components/common/MissionStatement";
import PassengerTypes from "@/components/cubiride/PassengerTypes";
import SafetyPledge from "@/components/common/SafetyPledge";
import StartingBlock1 from "@/components/common/StartingBlock1";
import { highlights } from "@/components/cubiride/highlights";
import { safetyPledge } from "@/components/cubiride/safetyPledge";
import { FC } from "react";

const Default: FC<any> = () => {
  return (
    <>
      {/* Starting block of CubiRide Page */}
      <StartingBlock1 backgroundImage={"/cubiride/block1.png"}>
        Ride with CubiRide — safe and smooth.
      </StartingBlock1>

      {/* Mission Statement */}
      <MissionStatement>
        With CubiRide, we use analytics to make your journeys safer, smoother,
        and more personalised.
      </MissionStatement>

      {/* Highlights */}
      <Highlights title={"Why choose CubiRide?"} items={highlights} />

      {/* Passenger Types */}
      <PassengerTypes />

      {/* Safety Pledge */}
      <SafetyPledge title={"CubiRide Safety Pledge"} items={safetyPledge} />

      {/* Join Section */}
      <JoinSection
        title={"Travel with CubiRide"}
        subtitle={
          "Dependable and secure transportation to take you wherever you need to be."
        }
        buttonText={"Book Now"}
      />
    </>
  );
};

export default Default;

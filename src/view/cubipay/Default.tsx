import CubiPayUsage from "@/components/cubipay/CubiPayUsage";
import Highlights from "@/components/common/Highlights";
import JoinSection from "@/components/common/JoinSection";
import MissionStatement from "@/components/common/MissionStatement";
import SafetyPledge from "@/components/common/SafetyPledge";
import StartingBlock1 from "@/components/common/StartingBlock1";
import { highlights } from "@/components/cubipay/highlights";
import { safetyPledge } from "@/components/cubipay/safetyPledge";
import { FC, Fragment } from "react";

const Default: FC = () => {
  return (
    <Fragment>
      {/* Starting block of CubiRide Page */}
      <StartingBlock1 backgroundImage={"/cubipay/block1.png"}>
        Spend Smart, Reap Rewards!
      </StartingBlock1>

      {/* Mission Statement */}
      <MissionStatement>
        Enjoy secure, rewarding payments for bills, rides, and shopping with
        CubiPay Wallet — your cashless journey starts here!
      </MissionStatement>

      {/* Highlights */}
      <Highlights title={"Why pay with CubiPay?"} items={highlights} />

      {/* CubiPay Usage */}
      <CubiPayUsage />

      {/* Safety Pledge */}
      <SafetyPledge title={"CubiPay Safety Pledge"} items={safetyPledge} />

      {/* Join Section */}
      <JoinSection
        title={"Pay with CubiPay"}
        subtitle={
          "Swipe to pay effortlessly and earn CubiPerk points for exclusive discounts on Cubitech and partner rewards."
        }
        buttonText={"Start Using CubiPay"}
      />
    </Fragment>
  );
};

export default Default;

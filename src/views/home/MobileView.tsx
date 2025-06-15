import CubitechServices from "@/components/home/cubitechServices/CubitechServices";
import CubiRideIntro from "@/components/home/CubiRideIntro";
import CubiPerkIntro from "@/components/home/CubiPerkIntro";
import JoinSection from "@/components/common/JoinSection";
import PeekView from "@/components/home/peekView/PeekView";
import Promotions from "@/components/common/promotions/Promotions";
import StartingBlock1 from "@/components/common/startingBlocks/StartingBlock1";
import { FC, Fragment } from "react";

const MobileView: FC = () => {
  return (
    <Fragment>
      {/* Starting block of Home Page */}
      <StartingBlock1
        bgImage={
          "https://ik.imagekit.io/a1fr3d10/mobile/home/block1.png?updatedAt=1748149610437"
        }
        overlay={"#00000099"}
        titleFontSize={36}
        textDivider={50}
        subtitleFontSize={28}
        title="Beyond Fintech"
        subtitle={
          <Fragment>
            Infinite Possibilities
            <br />
            for Your Life!
          </Fragment>
        }
      />

      {/* Cubitech Services */}
      <CubitechServices />

      {/* Promotions */}
      <Promotions
        header={"Weekly Promotions"}
        title={"Promotion Name"}
        descr={"Description"}
        bgColor={"var(--primary-main)"}
        color={"var(--white)"}
        image={
          "https://ik.imagekit.io/a1fr3d10/cubitech_light.svg?updatedAt=1748148047329"
        }
      />

      {/* CUBIFood Peek View */}
      <PeekView title={"CUBIFood"} totalItems={12} />

      {/* CUBIMart Peek View */}
      <PeekView title={"CUBIMart"} totalItems={12} />

      {/* CUBIRide Intro */}
      <CubiRideIntro />

      {/* CUBIPerk Intro */}
      <CubiPerkIntro />

      {/* Join Section */}
      <JoinSection
        title={"Join Cubitech Today"}
        descr={
          "Join us for exclusive promotions and the latest updates on events!"
        }
        buttonText={"Register Now"}
      />
    </Fragment>
  );
};

export default MobileView;

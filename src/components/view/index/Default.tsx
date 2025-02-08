import CubiPerkIntro from "@/components/index/CubiPerkIntro";
import CubiRideIntro from "@/components/index/CubiRideIntro";
import CubitechServices from "@/components/index/CubitechServices";
import JoinSection from "@/components/common/JoinSection";
import PeekView from "@/components/index/PeekView";
import Promotions from "@/components/common/Promotions";
import StartingBlock1 from "@/components/common/StartingBlock1";
import { FC } from "react";

const Default: FC<any> = () => {
  return (
    <>
      {/* Starting block of Index Page */}
      <StartingBlock1 backgroundImage={"/index/block1.png"}>
        Cubitech: Beyond Fintech,
        <br />
        Infinite Possibilities for Your Life!
      </StartingBlock1>

      {/* Cubitech services */}
      <CubitechServices />

      {/* Promotions */}
      <Promotions
        title={"Weekly Promotions"}
        bgColor={"primary.main"}
        titleColor={"white"}
        imageSrc={"/cubitech_brands/cubitech_light.svg"}
      />

      {/* CUBIFood Peek View */}
      <PeekView title={"CUBIFood"} />

      {/* CUBIMart Peek View */}
      <PeekView title={"CUBIMart"} />

      {/* CubiRide Intro */}
      <CubiRideIntro />

      {/* CubiPerk Intro */}
      <CubiPerkIntro />

      {/* Join Section */}
      <JoinSection
        title={"Join Cubitech Today"}
        subtitle={
          "Join us for exclusive promotions and the latest updates on events!"
        }
        buttonText={"Register Now"}
      />
    </>
  );
};

export default Default;

import CubitechServices from "@/components/index/CubitechServices";
import CubiPerkIntro from "@/components/index/CubiPerkIntro";
import CubiRideIntro from "@/components/index/CubiRideIntro";
import JoinSection from "@/components/common/JoinSection";
import PeekView from "@/components/index/PeekView";
import Promotions from "@/components/common/Promotions";
import StartingBlock1 from "@/components/common/StartingBlock1";
import { FC, Fragment } from "react";

const _: FC<any> = () => {
  return (
    <Fragment>
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
        imageSrc={
          "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741345140/cubitech_light_qhxj6v.svg"
        }
      />

      {/* CUBIFood Peek View */}
      <PeekView title={"CUBIFood"} totalItems={18} />

      {/* CUBIMart Peek View */}
      <PeekView title={"CUBIMart"} totalItems={18} />

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
    </Fragment>
  );
};

export default _;

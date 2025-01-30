import CubiPerkIntro from "../../index/CubiPerkIntro";
import CubiRideIntro from "../../index/CubiRideIntro";
import CubitechServices from "../../index/CubitechServices";
import JoinSection from "../../common/JoinSection";
import PeekView from "../../index/PeekView";
import Promotions from "../../common/Promotions";
import StartingBlock1 from "../../common/StartingBlock1";

const Default: React.FC<any> = () => {
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
        imageSrc={"./cubitech_brands/cubitech_light.svg"}
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

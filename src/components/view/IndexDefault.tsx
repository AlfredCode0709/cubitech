import CubiPerkIntro from "../index/CubiPerkIntro";
import CubiRideIntro from "../index/CubiRideIntro";
import CubitechServices from "../index/CubitechServices";
import JoinCubitech from "../index/JoinCubitech";
import PeekView from "../index/PeekView";
import Promotions from "../Promotions";
import StartingBlock1 from "../StartingBlock1";

const IndexDefault: React.FC<any> = () => {
  return (
    <>
      {/* Starting block of IndexDefault Page */}
      <StartingBlock1 backgroundImage={"/IndexDefault/block1.png"}>
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

      {/* Join Cubitech */}
      <JoinCubitech />
    </>
  );
};

export default IndexDefault;

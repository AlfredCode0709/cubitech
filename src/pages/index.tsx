import CubiPerkIntro from "@/components/index/CubiPerkIntro";
import CubiRideIntro from "@/components/index/CubiRideIntro";
import CubitechServices from "@/components/index/CubitechServices";
import JoinCubitech from "@/components/index/JoinCubitech";
import PeekView from "@/components/index/PeekView";
import Promotions from "@/components/Promotions";
import StartingBlock1 from "@/components/StartingBlock1";
import Head from "next/head";

const Index: React.FC<any> = () => {
  return (
    <>
      <Head>
        <title>Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cubitech.ico" />
      </Head>
      <main>
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

        {/* Join Cubitech */}
        <JoinCubitech />
      </main>
    </>
  );
};

export default Index;

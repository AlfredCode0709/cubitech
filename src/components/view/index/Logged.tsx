import CubiPerkProgressTable from "@/components/index/CubiPerkProgressTable";
import CubiPlusIntro from "@/components/index/CubiPlusIntro";
import NewsBoard from "@/components/index/NewsBoard";
import Promotions from "@/components/common/Promotions";
import TopRatedEateries from "@/components/index/TopRatedEateries";
import UserDashboard from "@/components/index/UserDashboard";
import { FC } from "react";

const Logged: FC<any> = () => {
  return (
    <>
      {/* User Dashboard */}
      <UserDashboard />

      {/* Promotions */}
      <Promotions
        title={"Weekly Promotions"}
        bgColor={"primary.main"}
        titleColor={"white"}
        imageSrc={"/cubitech_brands/cubitech_light.svg"}
      />

      {/* Top Rated Eateries */}
      <TopRatedEateries />

      {/* CUBIPerk Progress Table */}
      <CubiPerkProgressTable />

      {/* CUBIPlus Intro */}
      <CubiPlusIntro />

      {/* News Board */}
      <NewsBoard />
    </>
  );
};

export default Logged;

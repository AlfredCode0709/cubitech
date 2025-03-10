import CubiPerkProgressTable from "@/components/index/CubiPerkProgressTable";
import CubiPlusIntro from "@/components/index/CubiPlusIntro";
import NewsBoard from "@/components/index/NewsBoard";
import Promotions from "@/components/common/Promotions";
import TopRatedEateries from "@/components/index/TopRatedEateries";
import UserDashboard from "@/components/index/UserDashboard";
import { FC, Fragment } from "react";

const Logged: FC<any> = () => {
  return (
    <Fragment>
      {/* User Dashboard */}
      <UserDashboard />

      {/* Promotions */}
      <Promotions
        title={"Weekly Promotions"}
        bgColor={"primary.main"}
        titleColor={"white"}
        imageSrc={
          "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741345140/cubitech_light_qhxj6v.svg"
        }
      />

      {/* Top Rated Eateries */}
      <TopRatedEateries />

      {/* CUBIPerk Progress Table */}
      <CubiPerkProgressTable />

      {/* CUBIPlus Intro */}
      <CubiPlusIntro />

      {/* News Board */}
      <NewsBoard />
    </Fragment>
  );
};

export default Logged;

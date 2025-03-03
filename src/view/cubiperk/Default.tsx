import HacksTable from "@/components/cubiperk/HacksTable";
import LearnMore from "@/components/cubiperk/LearnMore";
import RewardsTable from "@/components/cubiperk/RewardsTable";
import StartingBlock3 from "@/components/common/StartingBlock3";
import UsageTable from "@/components/cubiperk/UsageTable";
import { FC } from "react";

const Default: FC<any> = () => {
  return (
    <>
      {/* Starting block of CubiPerk page */}
      <StartingBlock3 backgroundImage={"/cubiperk/block1.png"} />

      {/* Rewards Table */}
      <RewardsTable />

      {/* Learn More */}
      <LearnMore />

      {/* Usage Table */}
      <UsageTable />

      {/* Hacks Table */}
      <HacksTable />
    </>
  );
};

export default Default;

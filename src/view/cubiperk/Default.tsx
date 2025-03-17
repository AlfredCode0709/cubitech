import HacksTable from "@/components/cubiperk/hacksTable/HacksTable";
import LearnMore from "@/components/cubiperk/learnMore/LearnMore";
import RewardsTable from "@/components/cubiperk/rewardsTable/RewardsTable";
import StartingBlock3 from "@/components/common/StartingBlock3";
import UsageTable from "@/components/cubiperk/usageTable/UsageTable";
import { FC, Fragment } from "react";

const Default: FC = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Default;

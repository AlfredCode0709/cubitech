import HacksTable from "@/components/cubiperk/HacksTable";
import LearnMore from "@/components/cubiperk/LearnMore";
import StartingBlock3 from "@/components/common/StartingBlock3";
import RewardsTable from "@/components/cubiperk/RewardsTable";
import UsageTable from "@/components/cubiperk/UsageTable";

const Default: React.FC<any> = () => {
  return (
    <>
      {/* Starting block of CubiPerk page */}
      <StartingBlock3 backgroundImage={"/cubiperk/block1.png"} />

      {/* Rewards Table */}
      <RewardsTable />

      {/* Learn More About CubiPerk */}
      <LearnMore />

      {/* Usage Table */}
      <UsageTable />

      {/* Hacks Table */}
      <HacksTable />
    </>
  );
};

export default Default;

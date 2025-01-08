import HacksTable from "@/components/cubiperk/HacksTable";
import LearnMoreAboutCubiPerk from "@/components/cubiperk/LearnMoreAboutCubiPerk";
import RewardsTable from "@/components/cubiperk/RewardsTable";
import UsageTable from "@/components/cubiperk/UsageTable";
import StartingBlock3 from "@/components/StartingBlock3";
import Head from "next/head";

const CubiPerk: React.FC<any> = () => {
  return (
    <>
      <Head>
        <title>CubiPerk | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cubitech.ico" />
      </Head>
      <main>
        {/* Starting block of CubiPerk page */}
        <StartingBlock3 backgroundImage={"/cubiperk/block1.png"} />

        {/* Rewards Table */}
        <RewardsTable />

        {/* Learn More About CubiPerk */}
        <LearnMoreAboutCubiPerk />

        {/* Usage Table */}
        <UsageTable />

        {/* Hacks Table */}
        <HacksTable />
      </main>
    </>
  );
};

export default CubiPerk;

import CubiPayHighlights from "@/components/cubipay/CubiPayHighlights";
import HowCubiPayWorks from "@/components/cubipay/HowCubiPayWorks";
import MissionStatement from "@/components/MissionStatement";
import StartingBlock1 from "@/components/StartingBlock1";
import Head from "next/head";

const CubiPay: React.FC<any> = () => {
  return (
    <>
      <Head>
        <title>CubiPay | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cubitech.ico" />
      </Head>
      <main>
        {/* Starting block of CubiPay Page */}
        <StartingBlock1 backgroundImage={"/cubipay/block1.png"}>
          Spend Smart, Reap Rewards
        </StartingBlock1>

        {/* Mission Statement */}
        <MissionStatement>
          Enjoy secure, rewarding payments for bills, rides, and shopping with
          CubiPay Wallet — your cashless journey starts here!
        </MissionStatement>

        {/* CubiPay Highlights */}
        <CubiPayHighlights />

        {/* How does CubiPay works? */}
        <HowCubiPayWorks />

        {/* Safety Pledge */}
        {/* <SafetyPledge /> */}
      </main>
    </>
  );
};

export default CubiPay;

import Head from "next/head";
import CubiPayAspects from "@/components/cubipay/CubiPayAspects";
import HowCubiPayWorks from "@/components/cubipay/HowCubiPayWorks";
import MissionStatementBlock from "@/components/MissionStatementBlock";
import StartingBlock1 from "@/components/StartingBlock1";

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
        {/* Starting block of CubiRide Page */}
        <StartingBlock1 backgroundImage="/cubipay/block1.png">
          Spend Smart, Reap Rewards!
        </StartingBlock1>

        {/* Mission Statement block */}
        <MissionStatementBlock>
          Enjoy secure, rewarding payments for bills, rides, and shopping with
          CubiPay Wallet — your cashless journey starts here!
        </MissionStatementBlock>

        {/* CubiPay Aspects Block */}
        <CubiPayAspects />

        {/* How CubiPay works block */}
        <HowCubiPayWorks />
      </main>
    </>
  );
};

export default CubiPay;

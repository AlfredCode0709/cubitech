import Highlights from "@/components/common/Highlights";
import HowCubiPayWorks from "@/components/cubipay/HowCubiPayWorks";
import JoinSection from "@/components/common/JoinSection";
import MissionStatement from "@/components/common/MissionStatement";
import SafetyPledge from "@/components/common/SafetyPledge";
import StartingBlock1 from "@/components/common/StartingBlock1";

const highlights = [
  {
    alt: "Earn Rewards",
    src: "./cubipay/earn_rewards.svg",
    title: "Earn Rewards",
    descr: `Receive 0.75% back in CubiPerk points for every dollar spent. Redeem points for rides, meals, or discounts.`,
  },
  {
    alt: "Seamless Transactions",
    src: "./cubipay/seamless_transactions.svg",
    title: "Seamless Transactions",
    descr: `Enjoy hassle-free payments for all your favourite CubiPay services, from essentials to shopping.`,
  },
  {
    alt: "Easy Payments",
    src: "./cubipay/easy_payments.svg",
    title: "Easy Payments",
    descr: `Simply scan QR codes in-store or pay online with your smartphone — look for the CubiPay logo!`,
  },
];

const safetyPledge = [
  {
    alt: "Privacy First",
    src: "./cubipay/privacy_first.svg",
    title: "Privacy First",
    descr:
      "Identity verification keeps your account secure and your data private.",
  },
  {
    alt: "Fraud-Free",
    src: "./cubipay/fraud_free.svg",
    title: "Fraud-Free",
    descr:
      "24/7 monitoring blocks suspicious transactions. Contact us anytime.",
  },
  {
    alt: "Secure Access",
    src: "./cubipay/secure_access.svg",
    title: "Secure Access",
    descr:
      "Your funds are protected by your Cubi PIN, plus fingerprint or Face ID.",
  },
];

const Default: React.FC<any> = () => {
  return (
    <>
      {/* Starting block of CubiPay Page */}
      <StartingBlock1 backgroundImage={"/cubipay/block1.png"}>
        Spend Smart, Reap Rewards
      </StartingBlock1>

      {/* Mission Statement */}
      <MissionStatement>
        Enjoy secure, rewarding payments for bills, rides, and shopping with
        CubiPay Wallet — your cashless journey starts here!
      </MissionStatement>

      {/* Highlights */}
      <Highlights title={"Why pay with CubiPay?"} items={highlights} />

      {/* How does CubiPay works? */}
      <HowCubiPayWorks />

      {/* Safety Pledge */}
      <SafetyPledge title={"CubiPay Safety Pledge"} items={safetyPledge} />

      {/* Join Section */}
      <JoinSection
        title={"Pay with CubiPay"}
        subtitle={
          "The faster, easier way to pay. Swipe on your phone to earn CubiPerk points and redeem discounts on Cubitech services, partner rewards, and more."
        }
        buttonText={"Start Using CubiPay"}
      />
    </>
  );
};

export default Default;

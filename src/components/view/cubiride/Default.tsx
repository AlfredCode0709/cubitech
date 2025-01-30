import Highlights from "@/components/common/Highlights";
import JoinSection from "@/components/common/JoinSection";
import MissionStatement from "@/components/common/MissionStatement";
import SafetyPledge from "@/components/common/SafetyPledge";
import StartingBlock1 from "@/components/common/StartingBlock1";
import PassengerTypes from "@/components/cubiride/PassengerTypes";

const highlights = [
  {
    alt: "Fare Estimate Preview",
    src: "./cubiride/fare_estimate_preview.svg",
    title: "Fare Estimate Preview",
    descr: `Know your fare upfront before booking (excluding tolls and fees).`,
  },
  {
    alt: "Real-Time Ride Tracking",
    src: "./cubiride/real_time_ride_tracking.svg",
    title: "Real-Time Ride Tracking",
    descr: `Track your ride, view trip history, and get live updates on your driver.`,
  },
  {
    alt: "Seamless Payments",
    src: "./cubiride/seamless_payments.svg",
    title: "Seamless Payments",
    descr: `Pay easily via CubiPay or card in the app — no cash required.`,
  },
];

const safetyPledge = [
  {
    alt: "Safety Alert Button",
    src: "./cubiride/safety_alert_button.svg",
    title: "Safety Alert Button",
    descr: "One-tap alert emergency contacts or authorities during your ride.",
  },
  {
    alt: "Private Number Protection",
    src: "./cubiride/private_number_protection.svg",
    title: "Private Number Protection",
    descr:
      "Your phone number remains hidden, keeping your contact info secure.",
  },
  {
    alt: "Real-time Ride Sharing",
    src: "./cubiride/real_time_ride_sharing.svg",
    title: "Real-time Ride Sharing",
    descr:
      "Let friends or family track your ride in real-time for extra peace of mind.",
  },
];

const Default: React.FC<any> = () => {
  return (
    <>
      {/* Starting block of CubiRide Page */}
      <StartingBlock1 backgroundImage={"/cubiride/block1.png"}>
        Ride with CubiRide — safe and smooth.
      </StartingBlock1>

      {/* Mission Statement */}
      <MissionStatement>
        With CubiRide, we use analytics to make your journeys safer, smoother,
        and more personalised.
      </MissionStatement>

      {/* Highlights */}
      <Highlights title={"Why choose CubiRide?"} items={highlights} />

      {/* Passenger Types */}
      <PassengerTypes />

      {/* Safety Pledge */}
      <SafetyPledge title={"CubiRide Safety Pledge"} items={safetyPledge} />

      {/* Join Section */}
      <JoinSection
        title={"Travel with CubiRide"}
        subtitle={
          "Dependable and secure transportation to take you wherever you need to be."
        }
        buttonText={"Book Now"}
      />
    </>
  );
};

export default Default;

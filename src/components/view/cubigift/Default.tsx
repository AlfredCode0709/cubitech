import CustomisationForm from "@/components/cubigift/CustomisationForm";
import GiftCardSlideShow from "@/components/cubigift/GiftCardSlideshow";
import IntroSlideshow from "@/components/cubigift/IntroSlideshow";
import { FC, useState } from "react";

const Default: FC<any> = () => {
  /* State to manage selected card title and message */
  const [selectedCardTitle, setSelectedCardTitle] = useState<string>("");
  const [selectedCardMessage, setSelectedCardMessage] = useState<string>("");

  /* Function to handle card selection */
  const handleCardSelect = (title: string, message: string) => {
    setSelectedCardTitle(title);
    setSelectedCardMessage(message);
  };

  return (
    <>
      {/* Starting block of CubiGift page */}
      <IntroSlideshow />

      {/* Gift Cards Slideshow */}
      <GiftCardSlideShow onCardSelect={handleCardSelect} />

      {/* Customisation Form */}
      <CustomisationForm
        selectedCardTitle={selectedCardTitle}
        selectedCardMessage={selectedCardMessage}
        setSelectedCardTitle={setSelectedCardTitle} // Pass setter function
        setSelectedCardMessage={setSelectedCardMessage} // Pass setter function
      />
    </>
  );
};

export default Default;

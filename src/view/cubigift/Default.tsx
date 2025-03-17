import CustomisationForm from "@/components/cubigift/customisationForm/CustomisationForm";
import GiftCardSlideShow from "@/components/cubigift/giftCardSlideshow/GiftCardSlideshow";
import IntroSlideshow from "@/components/cubigift/IntroSlideshow";
import { FC, Fragment, useState } from "react";

const Default: FC = () => {
  const [selectedCardTitle, setSelectedCardTitle] = useState<string>("");
  const [selectedCardMessage, setSelectedCardMessage] = useState<string>("");

  const handleCardSelect = (title: string, message: string) => {
    setSelectedCardTitle(title);
    setSelectedCardMessage(message);
  };

  return (
    <Fragment>
      {/* Starting block of CubiGift page */}
      <IntroSlideshow />

      {/* Gift Cards Slideshow */}
      <GiftCardSlideShow onCardSelect={handleCardSelect} />

      {/* Customisation Form */}
      <CustomisationForm
        selectedCardTitle={selectedCardTitle}
        selectedCardMessage={selectedCardMessage}
        setSelectedCardTitle={setSelectedCardTitle}
        setSelectedCardMessage={setSelectedCardMessage}
      />
    </Fragment>
  );
};

export default Default;

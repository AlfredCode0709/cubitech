import CustomisationForm from "@/components/cubigift/CustomisationForm";
import GiftCardsSlideShow from "@/components/cubigift/GiftCardSlideshow";
import IntroSlideshow from "@/components/cubigift/IntroSlideshow";
import Head from "next/head";
import { useState } from "react";

const CubiGift: React.FC<any> = () => {
  // State to manage selected card title and message
  const [selectedCardTitle, setSelectedCardTitle] = useState<string>("");
  const [selectedCardMessage, setSelectedCardMessage] = useState<string>("");

  // Function to handle card selection
  const handleCardSelect = (title: string, message: string) => {
    setSelectedCardTitle(title);
    setSelectedCardMessage(message);
  };

  return (
    <>
      <Head>
        <title>CubiGift | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cubitech.ico" />
      </Head>
      <main>
        {/* Starting block of CubiGift page */}
        <IntroSlideshow />

        {/* Gift Cards Slideshow */}
        <GiftCardsSlideShow onCardSelect={handleCardSelect} />

        {/* Customisation Form */}
        <CustomisationForm
          selectedCardTitle={selectedCardTitle}
          selectedCardMessage={selectedCardMessage}
          setSelectedCardTitle={setSelectedCardTitle} // Pass setter function
          setSelectedCardMessage={setSelectedCardMessage} // Pass setter function
        />
      </main>
    </>
  );
};

export default CubiGift;

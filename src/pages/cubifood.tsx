import BrandSlogan from "@/components/BrandSlogan";
import CategorisedView from "@/components/CategorisedView";
import Category from "@/components/Category";
import Treasures from "@/components/cubifood/Treasures";
import Promotions from "@/components/Promotions";
import StartingBlock2 from "@/components/StartingBlock2";
import Head from "next/head";
import { useState } from "react";

export const categories = [
  { name: "Beverage", src: "./cubifood/beverage.svg" },
  { name: "Indian", src: "./cubifood/indian.svg" },
  { name: "Chinese", src: "./cubifood/chinese.svg" },
  { name: "Japanese", src: "./cubifood/japanese.svg" },
  { name: "Korean", src: "./cubifood/korean.svg" },
  { name: "Malay", src: "./cubifood/malay.svg" },
  { name: "Thai", src: "./cubifood/thai.svg" },
  { name: "Western", src: "./cubifood/western.svg" },
];

const CubiFood: React.FC<any> = () => {
  // State to manage the default image in the categorised view
  const [imageSrc, setImageSrc] = useState<string>(
    "./cubitech_brands/cubifood_light.svg"
  );

  // Handler function for selecting a category
  const handleCategorySelect = (src: string) => {
    setImageSrc(src); // Update the image source based on the selected category
  };

  return (
    <>
      <Head>
        <title>CubiFood | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cubitech.ico" />
      </Head>
      <main>
        {/* Starting block of CubiFood Page */}
        <StartingBlock2 backgroundImage={"/cubifood/block1.png"} />

        {/* CubiFood slogan block */}
        <BrandSlogan color={"#08834e"}>
          Eat Smart. Pay Easy. Enjoy Every Bite.
        </BrandSlogan>

        {/* Promotions */}
        <Promotions
          title={"Weekly Promotions"}
          bgColor={"#e7fef4"}
          titleColor={"#08834e"}
          imageSrc={"./cubitech_brands/cubifood_light.svg"}
        />

        {/* Treasures */}
        <Treasures />

        {/* CUBIFood Category */}
        <Category
          categories={categories}
          onCategorySelect={handleCategorySelect}
          primaryColor={"#08834e"}
          bgColor={"#e7fef4"}
        />

        {/* Categorised View */}
        <CategorisedView imageSrc={imageSrc} />
      </main>
    </>
  );
};

export default CubiFood;

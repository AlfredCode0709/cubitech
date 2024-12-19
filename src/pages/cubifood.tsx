import Head from "next/head";
import BrandSloganBlock from "@/components/BrandSloganBlock";
import Category from "@/components/Category";
import CategorisedView from "@/components/CategorisedView";
import Promotions from "@/components/Promotions";
import StartingBlock2 from "@/components/StartingBlock2";
import TopTreasures from "@/components/cubifood/TopTreasures";
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
  const [imageSrc, setImageSrc] = useState<string>(
    "./cubitech_brands/cubifood_light.svg",
  );

  const handleCategorySelect = (src: string) => {
    setImageSrc(src);
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
        <BrandSloganBlock color={"#08834e"}>
          Eat Smart. Pay Easy. Enjoy Every Bite.
        </BrandSloganBlock>

        {/* CubiFood Promotions block */}
        <Promotions
          promotionTitle={"Weekly Promotions"}
          bgColor={"#08834e"}
          titleColor={"white"}
          imageSrc={"./cubitech_brands/cubifood_light.svg"}
        />

        {/* Top Treasures block */}
        <TopTreasures />

        {/* CubiFood Category block */}
        <Category
          categories={categories}
          onCategorySelect={handleCategorySelect}
          primaryColor={"#08834e"} // Set primary color
          backgroundColor={"#e7fef4"} // Set background color
        />

        {/* CubiFood Categorised View */}
        <CategorisedView imageSrc={imageSrc} />
      </main>
    </>
  );
};

export default CubiFood;

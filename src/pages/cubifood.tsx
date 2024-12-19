import Head from "next/head";
import Promotions from "@/components/Promotions";
import TopTreasures from "@/components/cubifood/TopTreasures";
import Category from "@/components/cubifood/Category";
import CategorisedView from "@/components/CategorisedView";
import { useState } from "react";
import StartingBlock2 from "@/components/StartingBlock2";
import BrandSloganBlock from "@/components/BrandSloganBlock";

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
        <Category onCategorySelect={handleCategorySelect} />

        {/* CubiFood Categorised View */}
        <CategorisedView imageSrc={imageSrc} />
      </main>
    </>
  );
};

export default CubiFood;

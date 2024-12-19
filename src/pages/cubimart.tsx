import Head from "next/head";
import BargainBlitz from "@/components/cubimart/BargainBlitz";
import BrandSloganBlock from "@/components/BrandSloganBlock";
import Category from "@/components/Category";
import CategorisedView from "@/components/CategorisedView";
import Promotions from "@/components/Promotions";
import StartingBlock2 from "@/components/StartingBlock2";
import { useState } from "react";

export const categories = [
  { name: "Food and Beverage", src: "./cubimart/food_and_beverage.svg" },
  {
    name: "Toys and Baby Products",
    src: "./cubimart/toys_and_baby_products.svg",
  },
  { name: "Kids' Fashion", src: "./cubimart/kids_fashion.svg" },
  {
    name: "Video Games & Hobbies",
    src: "./cubimart/video_games_and_hobbies.svg",
  },
  { name: "Sports & Outdoors", src: "./cubimart/sports_and_outdoors.svg" },
  {
    name: "Multimedia & Entertainment",
    src: "./cubimart/multimedia_and_entertainment.svg",
  },
  {
    name: "Electronics & Gadgets",
    src: "./cubimart/electronics_and_gadgets.svg",
  },
  { name: "Pet Supplies", src: "./cubimart/pet_supplies.svg" },
  { name: "Men's Apparel", src: "./cubimart/men_apparel.svg" },
  { name: "Women's Apparel", src: "./cubimart/women_apparel.svg" },
  {
    name: "Accessories & Jewellery",
    src: "./cubimart/accessories_and_jewellery.svg",
  },
  { name: "Miscellaneous", src: "./cubimart/miscellaneous.svg" },
];

const CubiMart: React.FC<any> = () => {
  const [imageSrc, setImageSrc] = useState<string>(
    "./cubitech_brands/cubimart_light.svg",
  );

  const handleCategorySelect = (src: string) => {
    setImageSrc(src);
  };

  return (
    <>
      <Head>
        <title>CubiMart | Cubitech</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cubitech.ico" />
      </Head>
      <main>
        {/* Starting block of CubiMart Page */}
        <StartingBlock2 backgroundImage={"/cubimart/block1.png"} />

        {/* CubiMart slogan block */}
        <BrandSloganBlock color={"primary"}>
          Shop the Beat of Your Life!
        </BrandSloganBlock>

        {/* CubiMart Promotions block */}
        <Promotions
          promotionTitle={"Weekly Promotions"}
          bgColor={"primary.light"}
          titleColor={"primary.main"}
          imageSrc={"./cubitech_brands/cubimart_light.svg"}
        />

        {/* CubiMart Bargain Blitz block */}
        <BargainBlitz />

        {/* CubiMart Category block */}
        <Category
          categories={categories}
          onCategorySelect={handleCategorySelect}
          primaryColor={"primary.main"} // Set primary color
          backgroundColor={"primary.light"} // Set background color
        />

        {/* CubiMart Categorised View */}
        <CategorisedView imageSrc={imageSrc} />
      </main>
    </>
  );
};

export default CubiMart;

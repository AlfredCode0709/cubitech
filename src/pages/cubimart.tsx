import BargainBlitz from "@/components/cubimart/BargainBlitz";
import BrandSlogan from "@/components/BrandSlogan";
import CategorisedView from "@/components/CategorisedView";
import Category from "@/components/Category";
import Promotions from "@/components/Promotions";
import StartingBlock2 from "@/components/StartingBlock2";
import Head from "next/head";
import { useState } from "react";

export const categories = [
  { name: "Food &<br />Beverage", src: "./cubimart/food_and_beverage.svg" },
  {
    name: "Toys & Baby<br />Products",
    src: "./cubimart/toys_and_baby_products.svg",
  },
  { name: "Kids'<br />Fashion", src: "./cubimart/kids_fashion.svg" },
  {
    name: "Video Games &<br />Hobbies",
    src: "./cubimart/video_games_and_hobbies.svg",
  },
  { name: "Sports &<br />Outdoors", src: "./cubimart/sports_and_outdoors.svg" },
  {
    name: "Multimedia &<br />Entertainment",
    src: "./cubimart/multimedia_and_entertainment.svg",
  },
  {
    name: "Electronics &<br />Gadgets",
    src: "./cubimart/electronics_and_gadgets.svg",
  },
  { name: "Pets'<br />Supplies", src: "./cubimart/pet_supplies.svg" },
  { name: "Men's<br />Apparel", src: "./cubimart/men_apparel.svg" },
  { name: "Women's<br />Apparel", src: "./cubimart/women_apparel.svg" },
  {
    name: "Accessories &<br />Jewellery",
    src: "./cubimart/accessories_and_jewellery.svg",
  },
  { name: "Miscellaneous /<br />Others", src: "./cubimart/miscellaneous.svg" },
];

const CubiMart: React.FC<any> = () => {
  // State to manage the default image in the categorised view
  const [imageSrc, setImageSrc] = useState<string>(
    "./cubitech_brands/cubimart_light.svg"
  );

  // Handler function for selecting a category
  const handleCategorySelect = (src: string) => {
    setImageSrc(src); // Update the image source based on the selected category
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
        <BrandSlogan color={"primary.main"}>
          Shop the Beat of Your Life!
        </BrandSlogan>

        {/* Promotions */}
        <Promotions
          title={"Weekly Promotions"}
          bgColor={"primary.light"}
          titleColor={"primary.main"}
          imageSrc={"./cubitech_brands/cubimart_light.svg"}
        />

        {/* Bargain Blitz */}
        <BargainBlitz />

        {/* CUBIMart Category */}
        <Category
          categories={categories}
          onCategorySelect={handleCategorySelect}
          primaryColor={"var(--primary-main)"}
          bgColor={"var(--primary-light)"}
        />

        {/* Categorised View */}
        <CategorisedView imageSrc={imageSrc} />
      </main>
    </>
  );
};

export default CubiMart;

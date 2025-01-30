import BargainBlitz from "@/components/cubimart/BargainBlitz";
import BrandSlogan from "@/components/common/BrandSlogan";
import Category from "@/components/common/Category";
import CatalogueFilter from "@/components/cubimart/CatalogueFilter";
import CategorisedView from "@/components/cubimart/CategorisedView";
import Promotions from "@/components/common/Promotions";
import StartingBlock2 from "@/components/common/StartingBlock2";
import { useState } from "react";

export const categories = [
  {
    name: "foodAndBeverage",
    label: "Food & Beverage",
    text: "Food &<br />Beverage",
    src: "./cubimart/food_and_beverage.svg",
  },
  {
    name: "toysAndBabyProducts",
    label: "Toys & Baby Products",
    text: "Toys & Baby<br />Products",
    src: "./cubimart/toys_and_baby_products.svg",
  },
  {
    name: "kidsFashion",
    label: "Kids' Fashion",
    text: "Kids'<br />Fashion",
    src: "./cubimart/kids_fashion.svg",
  },
  {
    name: "videoGamesAndHobbies",
    label: "Video Games & Hobbies",
    text: "Video Games &<br />Hobbies",
    src: "./cubimart/video_games_and_hobbies.svg",
  },
  {
    name: "sportsAndOutdoors",
    label: "Sports & Outdoors",
    text: "Sports &<br />Outdoors",
    src: "./cubimart/sports_and_outdoors.svg",
  },
  {
    name: "multimediaAndEntertainment",
    label: "Multimedia & Entertainment",
    text: "Multimedia &<br />Entertainment",
    src: "./cubimart/multimedia_and_entertainment.svg",
  },
  {
    name: "electronicsAndGadgets",
    label: "Electronics & Gadgets",
    text: "Electronics &<br />Gadgets",
    src: "./cubimart/electronics_and_gadgets.svg",
  },
  {
    name: "petsSupplies",
    label: "Pets' Supplies",
    text: "Pets'<br />Supplies",
    src: "./cubimart/pet_supplies.svg",
  },
  {
    name: "mensApparel",
    label: "Men's Apparel",
    text: "Men's<br />Apparel",
    src: "./cubimart/men_apparel.svg",
  },
  {
    name: "womensApparel",
    label: "Women's Apparel",
    text: "Women's<br />Apparel",
    src: "./cubimart/women_apparel.svg",
  },
  {
    name: "accessoriesAndJewellery",
    label: "Accessories & Jewellery",
    text: "Accessories &<br />Jewellery",
    src: "./cubimart/accessories_and_jewellery.svg",
  },
  {
    name: "miscellaneousOrOthers",
    label: "Miscellaneous / Others",
    text: "Miscellaneous /<br />Others",
    src: "./cubimart/miscellaneous.svg",
  },
];

const Default: React.FC<any> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>("");
  const [isFiltered, setIsFiltered] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>(
    "./cubitech_brands/cubimart_light.svg"
  );

  // Handle category selection
  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setIsFiltered(true); // Mark as filtered after selecting category

    // Apply filter based on the selected category
    const selectedCategoryItem = categories.find(
      (category) => category.name === categoryName
    );
    const image = selectedCategoryItem
      ? selectedCategoryItem.src
      : "./filtered_icon.svg"; // Use category image or fallback
    setImageSrc(image); // Set image for the filtered category
  };

  // Handle clearing filters
  const handleClearFilters = () => {
    setIsFiltered(false); // Set isFiltered to false
    setSelectedCategory(null); // Optionally reset selectedCategory as well
    setImageSrc("./cubitech_brands/cubimart_light.svg");
  };

  return (
    <>
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
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
        primaryColor={"var(--primary-main)"}
        bgColor={"var(--primary-light)"}
      />

      {/* Catalogue Filter */}
      <CatalogueFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onApplyFilters={(image, category) => {
          setImageSrc(image);
          setSelectedCategory(category);
          setIsFiltered(true); // Set isFiltered to true when filters are applied
        }}
        onClearFilters={handleClearFilters} // Pass the handleClearFilters function
      />

      {/* Categorised View */}
      <CategorisedView imageSrc={imageSrc} />
    </>
  );
};

export default Default;

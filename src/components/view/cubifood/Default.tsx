import BrandSlogan from "@/components/common/BrandSlogan";
import Category from "@/components/common/Category";
import CatalogueFilter from "@/components/cubifood/CatalogueFilter";
import FilteredCatalogue from "@/components/cubifood/FilteredCatalogue";
import NearbyOutlets from "@/components/cubifood/NearbyOutlets";
import Promotions from "@/components/common/Promotions";
import StartingBlock2 from "@/components/common/StartingBlock2";
import Treasures from "@/components/cubifood/Treasures";
import { FC, useState } from "react";

export const categories = [
  {
    name: "beverage",
    label: "Beverage",
    text: "Beverage",
    src: "/cubifood/beverage.svg",
  },
  {
    name: "indian",
    label: "Indian",
    text: "Indian",
    src: "/cubifood/indian.svg",
  },
  {
    name: "chinese",
    label: "Chinese",
    text: "Chinese",
    src: "/cubifood/chinese.svg",
  },
  {
    name: "japanese",
    label: "Japanese",
    text: "Japanese",
    src: "/cubifood/japanese.svg",
  },
  {
    name: "korean",
    label: "Korean",
    text: "Korean",
    src: "/cubifood/korean.svg",
  },
  { name: "malay", label: "Malay", text: "Malay", src: "/cubifood/malay.svg" },
  { name: "thai", label: "Thai", text: "Thai", src: "/cubifood/thai.svg" },
  {
    name: "western",
    label: "Western",
    text: "Western",
    src: "/cubifood/western.svg",
  },
];

const Default: FC<any> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>("");
  const [isFiltered, setIsFiltered] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>(
    "/cubitech_brands/cubifood_light.svg"
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
      : "/filtered_icon.svg"; // Use category image or fallback
    setImageSrc(image); // Set image for the filtered category
  };

  // Handle clearing filters
  const handleClearFilters = () => {
    setIsFiltered(false); // Set isFiltered to false
    setSelectedCategory(null); // Optionally reset selectedCategory as well
  };

  return (
    <>
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
        imageSrc={"/cubitech_brands/cubifood_light.svg"}
      />

      {/* Treasures */}
      <Treasures />

      {/* CUBIFood Category */}
      <Category
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
        primaryColor={"#08834e"}
        bgColor={"#e7fef4"}
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

      {isFiltered ? (
        <FilteredCatalogue imageSrc={imageSrc} />
      ) : (
        <NearbyOutlets />
      )}
    </>
  );
};

export default Default;

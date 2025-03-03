import BrandSlogan from "@/components/common/BrandSlogan";
import Category from "@/components/common/Category";
import FilteredCatalogue from "@/components/common/FilteredCatalogue";
import MainFilter from "@/components/common/MainFilter";
import NearbyOutlets from "@/components/cubifood/NearbyOutlets";
import Promotions from "@/components/common/Promotions";
import StartingBlock2 from "@/components/common/StartingBlock2";
import Treasures from "@/components/cubifood/Treasures";
import { categories } from "@/components/cubifood/categories";
import { FC, useState } from "react";

const Default: FC<any> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>("");
  const [isFiltered, setIsFiltered] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>(
    "/cubitech_brands/cubifood_light.svg",
  );

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setIsFiltered(true);

    const selectedCategoryItem = categories.find(
      (category) => category.name === categoryName,
    );
    const image = selectedCategoryItem
      ? selectedCategoryItem.src
      : "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1740098614/filtered_icon_ll8b8e.svg";
    setImageSrc(image);
  };

  const handleClearFilters = () => {
    setIsFiltered(false);
    setSelectedCategory(null);
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

      {/* Main Filter */}
      <MainFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onApplyFilters={(image, category) => {
          setImageSrc(image);
          setSelectedCategory(category);
          setIsFiltered(true);
        }}
        onClearFilters={handleClearFilters}
      />

      {isFiltered ? (
        <FilteredCatalogue imageSrc={imageSrc} numberOfStalls={18} />
      ) : (
        <NearbyOutlets numberOfStalls={10} />
      )}
    </>
  );
};

export default Default;

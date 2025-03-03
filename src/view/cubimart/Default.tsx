import BargainBlitz from "@/components/cubimart/BargainBlitz";
import BrandSlogan from "@/components/common/BrandSlogan";
import Category from "@/components/common/Category";
import CategorisedView from "@/components/cubimart/CategorisedView";
import MainFilter from "@/components/cubimart/MainFilter";
import Promotions from "@/components/common/Promotions";
import StartingBlock2 from "@/components/common/StartingBlock2";
import StoresView from "@/components/cubimart/StoresView";
import { categories } from "@/components/cubimart/categories";
import { FC, useState } from "react";

const Default: FC<any> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>("");
  const [isFiltered, setIsFiltered] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>(
    "/cubitech_brands/cubimart_light.svg"
  );

  /* Handle category selection */
  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setIsFiltered(true); /* Mark as filtered after selecting category */

    /* Apply filter based on the selected category */
    const selectedCategoryItem = categories.find(
      (category) => category.name === categoryName
    );
    const image = selectedCategoryItem
      ? selectedCategoryItem.src
      : "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1740098614/filtered_icon_ll8b8e.svg"; /* Use category image or fallback */
    setImageSrc(image); /* Set image for the filtered category */
  };

  /* Handle clearing filters */
  const handleClearFilters = () => {
    setIsFiltered(false); /* Set isFiltered to false */
    setSelectedCategory(null); /* Optionally reset selectedCategory as well */
  };

  return (
    <>
      {/* Starting block of CubiFood Page */}
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
        imageSrc={"/cubitech_brands/cubimart_light.svg"}
      />

      {/* Bargain Blitz */}
      <BargainBlitz totalItems={18} />

      {/* CUBIMart Category */}
      <Category
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
        primaryColor={"var(--primary-main)"}
        bgColor={"var(--primary-light)"}
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
        <CategorisedView imageSrc={imageSrc} />
      ) : (
        <StoresView numberOfStores={48} />
      )}
    </>
  );
};

export default Default;

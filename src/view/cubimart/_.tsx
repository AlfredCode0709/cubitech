import BargainBlitz from "@/components/cubimart/BargainBlitz";
import BrandSlogan from "@/components/common/BrandSlogan";
import Category from "@/components/common/Category";
import FilteredCatalogue from "@/components/common/FilteredCatalogue";
import MainFilter from "@/components/common/mainFilter/MainFilter";
import Promotions from "@/components/common/Promotions";
import StartingBlock2 from "@/components/common/StartingBlock2";
import StoresView from "@/components/cubimart/StoresView";
import { categories } from "@/components/cubimart/categories";
import { FC, Fragment, useState } from "react";

const _: FC<any> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>("");
  const [isFiltered, setIsFiltered] = useState<boolean>(false);
  const [imageSrc, setImageSrc] = useState<string>(
    "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741345166/cubimart_light_i70igy.svg"
  );

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setIsFiltered(true);

    const selectedCategoryItem = categories.find(
      (category) => category.name === categoryName
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
    <Fragment>
      {/* Starting block of CubiFood Page */}
      <StartingBlock2 backgroundImage={"/cubimart/block1.png"} />

      {/* CubiMart slogan block */}
      <BrandSlogan>Shop the Beat of Your Life!</BrandSlogan>

      {/* Promotions */}
      <Promotions
        header={"Weekly Promotions"}
        title={"Promotion Name"}
        descr={"Description"}
        titleFontSize={18}
        descrFontSize={14}
        imageSrc={
          "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741345166/cubimart_light_i70igy.svg"
        }
      />

      {/* Bargain Blitz */}
      <BargainBlitz totalItems={18} />

      {/* CUBIFood Category */}
      <Category
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
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
        <FilteredCatalogue
          imageSrc={imageSrc}
          numberOfStalls={0}
          numberOfItems={18}
        />
      ) : (
        <StoresView numberOfStores={40} />
      )}
    </Fragment>
  );
};

export default _;

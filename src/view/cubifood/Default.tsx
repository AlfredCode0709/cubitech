import BrandSlogan from "@/components/common/BrandSlogan";
import Category from "@/components/common/Category";
import FilteredCatalogue from "@/components/common/FilteredCatalogue";
import MainFilter from "@/components/common/MainFilter";
import NearbyOutlets from "@/components/cubifood/NearbyOutlets";
import Promotions from "@/components/common/Promotions";
import StartingBlock2 from "@/components/common/StartingBlock2";
import Treasures from "@/components/cubifood/Treasures";
import { categories } from "@/components/cubifood/categories";
import { FC, Fragment, useState } from "react";

const _: FC<any> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>("");
  const [isFiltered, setIsFiltered] = useState<boolean>(false);
  const [imageSrc, setImageSrc] = useState<string>(
    "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741345165/cubifood_light_j6lpn9.svg"
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
    <Fragment>
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
        imageSrc={
          "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741345165/cubifood_light_j6lpn9.svg"
        }
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
        <FilteredCatalogue imageSrc={imageSrc} numberOfStalls={18} numberOfItems={0} />
      ) : (
        <NearbyOutlets numberOfStalls={10} />
      )}
    </Fragment>
  );
};

export default _;

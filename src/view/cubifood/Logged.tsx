import Box from "@mui/material/Box";
import Category from "@/components/common/Category";
import FilteredCatalogue from "@/components/common/FilteredCatalogue";
import MainFilter from "@/components/cubifood/MainFilter";
import NearbyOutlets from "@/components/cubifood/NearbyOutlets";
import styles from "../../../styles/cubifood.module.scss";
import { categories } from "@/components/cubifood/categories";
import { FC, useState } from "react";

const Logged: FC<any> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>("");
  const [isFiltered, setIsFiltered] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>(
    "/cubitech_brands/cubifood_light.svg",
  );

  /* Handle category selection */
  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setIsFiltered(true); /* Mark as filtered after selecting category */

    /* Apply filter based on the selected category */
    const selectedCategoryItem = categories.find(
      (category) => category.name === categoryName,
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
      {/* Starting block of CUBIFood Logged Page */}
      <Box className={styles.userStartingBlock} />

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

export default Logged;

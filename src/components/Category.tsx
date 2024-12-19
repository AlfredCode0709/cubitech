import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import commonStyles from "../styles/common.module.scss";

// Define the category type for clarity
interface CategoryType {
  name: string;
  src: string;
}

interface CategoryProps {
  categories: CategoryType[]; // Dynamically passed categories
  onCategorySelect: (src: string) => void;
  primaryColor: string; // Custom color for category name
  backgroundColor: string; // Custom color for category highlight
}

const Category: React.FC<CategoryProps> = ({
  categories,
  onCategorySelect,
  primaryColor,
  backgroundColor,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (src: string) => {
    setSelectedCategory(src);
    onCategorySelect(src);
  };

  // Calculate xs based on the number of categories
  const numCategories = categories.length;
  const gridSize = numCategories === 8 ? 1.5 : 2;

  return (
    <Box
      className={commonStyles.categoryBlock}
      style={
        {
          color: `${primaryColor}`,
        } as React.CSSProperties
      } // Set dynamic primary color
    >
      <Grid container spacing={2}>
        {categories.map((category, index) => (
          <Grid item xs={gridSize} key={index}>
            <Box
              className={`${commonStyles.categoryBox} ${
                selectedCategory === category.src
                  ? commonStyles.selectedCategory
                  : ""
              }`}
              onClick={() => handleCategoryClick(category.src)}
              style={{ borderColor: primaryColor }}
            >
              <Avatar
                className={commonStyles.avatar}
                style={
                  {
                    backgroundColor: `${backgroundColor}`,
                  } as React.CSSProperties
                } // Set dynamic background color
                alt={category.name}
                src={category.src}
                variant={"circular"}
              />
              <Typography className={commonStyles.name}>
                {category.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Category;

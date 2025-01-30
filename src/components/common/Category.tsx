import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import commonStyles from "../../styles/common.module.scss";
import { CSSProperties } from "react";

interface CategoryType {
  name: string;
  label: string;
  text: string;
  src: string;
}

interface CategoryProps {
  categories: CategoryType[]; // Dynamically passed categories
  selectedCategory: string | null; // Selected category name
  onCategorySelect: (src: string) => void;
  primaryColor: string; // Custom color for category name
  bgColor: string; // Custom color for category highlight
}

const Category: React.FC<CategoryProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
  primaryColor,
  bgColor,
}) => {

  const handleCategoryClick = (category: CategoryType) => {
    // setSelectedCategory(category.name); // Update the selected category name
    onCategorySelect(category.name); // Pass category name to the parent
  };

  // Calculate xs based on the number of categories
  const numCategories = categories.length;
  const gridSize = numCategories === 8 ? 1.5 : 2; // If there are 8 categories, use smaller grid size

  // Function to add line breaks to category names for better readability
  const formatCategoryName = (name: string) => {
    return <span dangerouslySetInnerHTML={{ __html: name }} />;
  };

  return (
    <Box
      className={commonStyles.category}
      style={
        {
          color: `${primaryColor}`,
        } as CSSProperties // Type assertion for CSS variables
      }
    >
      <Grid container spacing={2}>
        {categories.map((category, index) => (
          <Grid item xs={gridSize} key={index}>
            <Box
              className={commonStyles.box}
              onClick={() => handleCategoryClick(category)}
            >
              <Avatar
                className={commonStyles.avatar}
                style={
                  {
                    backgroundColor: `${bgColor}`,
                    border:
                      selectedCategory === category.name
                        ? `2px solid ${primaryColor}`
                        : "none",
                  } as CSSProperties
                } // Set dynamic background color
                alt={category.name}
                src={category.src}
              />
              <Typography className={commonStyles.name}>
                {formatCategoryName(category.text)}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Category;

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import commonStyles from "../../styles/common.module.scss";
import { CSSProperties, FC } from "react";

interface CategoryType {
  name: string;
  label: string;
  text: string;
  src: string;
}

interface CategoryProps {
  categories: CategoryType[];
  selectedCategory: string | null;
  onCategorySelect: (src: string) => void;
  primaryColor?: string;
  bgColor?: string;
}

const Category: FC<CategoryProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
  primaryColor,
  bgColor,
}) => {
  const handleCategoryClick = (category: CategoryType) => {
    onCategorySelect(category.name);
  };

  const numCategories = categories.length;
  const gridSize = numCategories === 8 ? 1.5 : 2;

  const formatCategoryName = (name: string) => {
    return <span dangerouslySetInnerHTML={{ __html: name }} />;
  };

  return (
    <Box
      className={commonStyles.category}
      sx={
        {
          "--color": `${primaryColor || "var(--primary-main)"}`,
        } as CSSProperties
      }
    >
      <Grid container spacing={2}>
        {categories.map((category, index) => (
          <Grid size={gridSize} key={index}>
            <Box
              className={commonStyles.box}
              onClick={() => handleCategoryClick(category)}
            >
              <Avatar
                className={commonStyles.avatar}
                sx={
                  {
                    "--background": `${bgColor || "var(--primary-light)"}`,
                    border:
                      selectedCategory === category.name
                        ? `2px solid ${primaryColor || "var(--primary-main)"}`
                        : "none",
                  } as CSSProperties
                }
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

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styles from "../../styles/cubifood.module.scss";
import { useState } from "react";

export const categories = [
  { name: "Beverage", src: "./cubifood/beverage.svg" },
  { name: "Indian", src: "./cubifood/indian.svg" },
  { name: "Chinese", src: "./cubifood/chinese.svg" },
  { name: "Japanese", src: "./cubifood/japanese.svg" },
  { name: "Korean", src: "./cubifood/korean.svg" },
  { name: "Malay", src: "./cubifood/malay.svg" },
  { name: "Thai", src: "./cubifood/thai.svg" },
  { name: "Western", src: "./cubifood/western.svg" },
];

interface CategoryProps {
  onCategorySelect: (src: string) => void;
}

const Category: React.FC<CategoryProps> = ({ onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (src: string) => {
    setSelectedCategory(src);
    onCategorySelect(src);
  };

  return (
    <Box className={styles.categoryBlock}>
      <Grid container>
        {categories.map((category, index) => (
          <Grid item xs={1.5} key={index}>
            <Box
              className={`${styles.categoryBox} ${
                selectedCategory === category.src ? styles.selectedCategory : ""
              }`}
              onClick={() => handleCategoryClick(category.src)}
            >
              <Avatar
                className={styles.avatar}
                key={index}
                alt={category.name}
                src={category.src}
                variant={"circular"}
              />
              <Typography className={styles.name}>{category.name}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Category;

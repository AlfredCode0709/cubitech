import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import CategoryList from "./CategoryList";
import styles from "../../styles/cubimart.module.scss";
import { FC } from "react";

interface StoreFilterProps {
  selectedOption: number | null;
  onSelectedOption: (stallId: number | null) => void;
  numberOfCategories: number;
}

const StoreFilter: FC<StoreFilterProps> = ({
  selectedOption,
  onSelectedOption,
  numberOfCategories,
}) => {
  return (
    <Box className={styles.storeFilter}>
      <Grid container spacing={2}>
        <Grid size={2}>
          <Button
            className={`${styles.allCategoriesButton} ${
              selectedOption === null ? styles.focused : styles.notFocused
            }`}
            size={"large"}
            onClick={() => onSelectedOption(null)} 
          >
            All Categories
          </Button>
        </Grid>
        <Grid size={10}>
          <CategoryList
            selectedCategory={selectedOption}
            onSelectCategory={onSelectedOption}
            numberOfCategories={numberOfCategories}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default StoreFilter;

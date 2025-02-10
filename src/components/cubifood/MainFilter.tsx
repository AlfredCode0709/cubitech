import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid2";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FC, useEffect, useState } from "react";
import { mainFilterOptions } from "./mainFilterOptions";
import styles from "../../styles/cubifood.module.scss";

interface MainFilterProps {
  categories: { name: string; label: string; src: string }[];
  selectedCategory: string | null;
  onApplyFilters: (image: string, category: string | null) => void;
  onClearFilters: () => void;
}

const MainFilter: FC<MainFilterProps> = ({
  categories,
  selectedCategory,
  onApplyFilters,
  onClearFilters,
}) => {
  const [filters, setFilters] = useState({
    sortBy: "",
    price: "",
    cuisine: selectedCategory || "",
    dietaryChoice: "",
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    if (key === "cuisine") {
      const selectedCategoryItem = categories.find(
        (category) => category.name === value,
      );
      const image = selectedCategoryItem
        ? selectedCategoryItem.src
        : "/filtered_icon.svg";
      onApplyFilters(image, value); /* Sync category selection */
    }
  };

  const handleApplyFilters = () => {
    const selectedCategoryItem = categories.find(
      (category) => category.name === filters.cuisine,
    );
    const image = selectedCategoryItem
      ? selectedCategoryItem.src
      : "/filtered_icon.svg"; /* Use category image or fallback */
    onApplyFilters(
      image,
      filters.cuisine,
    ); /* Trigger the callback with image and category */
  };

  /* Update filters when selectedCategory changes */
  useEffect(() => {
    if (selectedCategory) {
      setFilters((prev) => ({
        ...prev,
        cuisine: selectedCategory,
      }));
    }
  }, [selectedCategory]);

  /* Function to check if any filter is applied */
  const isAnyFilterSelected = Object.values(filters).some(
    (value) => value !== "",
  );

  return (
    <Box className={styles.mainFilter}>
      <Grid container spacing={1} className={styles.gridContainer}>
        {mainFilterOptions.map(({ label, id, options, dynamic }) => (
          <Grid size={2.25} key={id}>
            <FormControl fullWidth>
              <InputLabel id={`${id}Label`}>{label}</InputLabel>
              <Select
                labelId={`${id}Label`}
                id={`${id}Select`}
                value={filters[id as keyof typeof filters]}
                label={label}
                onChange={(e) => handleFilterChange(id, e.target.value)}
                MenuProps={{
                  disableScrollLock: true,
                }}
              >
                {(dynamic
                  ? categories.map((category) => ({
                      value: category.name,
                      label: category.label,
                    }))
                  : options
                )?.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        ))}

        <Grid size={3} textAlign={"right"}>
          <Button
            className={styles.clearAllButton}
            onClick={() => {
              setFilters({
                sortBy: "",
                price: "",
                cuisine: "",
                dietaryChoice: "",
              });
              onClearFilters(); /* Call the function to clear filters in the parent */
            }}
          >
            Clear All
          </Button>
          <Button
            className={styles.applyFiltersButton}
            variant="contained"
            color="primary"
            onClick={handleApplyFilters}
            disabled={!isAnyFilterSelected}
          >
            Apply Filters
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainFilter;

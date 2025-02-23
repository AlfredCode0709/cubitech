import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid2";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import styles from "../../styles/cubifood.module.scss";
import { getMainFilterOptions } from "./mainFilterOptions";
import { FC, useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";

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
  const { user } = useUser();
  const isLoggedIn = !!user;

  const [filters, setFilters] = useState({
    sortBy: "",
    price: "",
    cuisine: selectedCategory || "",
    dietaryChoice: "",
    consumeBy: "",
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    if (key === "cuisine") {
      const selectedCategoryItem = categories.find(
        (category) => category.name === value,
      );
      const image = selectedCategoryItem
        ? selectedCategoryItem.src
        : "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1740098614/filtered_icon_ll8b8e.svg";
      onApplyFilters(image, value); /* Sync category selection */
    }
  };

  const handleApplyFilters = () => {
    const selectedCategoryItem = categories.find(
      (category) => category.name === filters.cuisine,
    );
    const image = selectedCategoryItem
      ? selectedCategoryItem.src
      : "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1740098614/filtered_icon_ll8b8e.svg"; /* Use category image or fallback */
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

  const filterOptions = getMainFilterOptions(isLoggedIn);

  return (
    <Box className={styles.mainFilter}>
      <Grid container spacing={1} className={styles.filterContent}>
        {filterOptions.map(({ label, id, options, dynamic, size }) => (
          <Grid size={size} key={id}>
            <FormControl
              fullWidth
              sx={{
                "& .MuiInputLabel-root": {
                  "&:active": {
                    color: "#08834e",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": { color: "#08834e" },
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": { borderColor: "#08834e" },
                  "&.Mui-focused fieldset": { borderColor: "#08834e" },
                },
              }}
            >
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
                  <MenuItem
                    key={option.value}
                    value={option.value}
                    sx={{
                      "&:hover": { background: "#e7fef4" }, // Hover background color
                      "&.Mui-selected": {
                        background: "#c5f2e0 !important",
                      },
                    }}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        ))}

        <Grid size={isLoggedIn ? 3.5 : 4} textAlign={"right"}>
          <Button
            className={styles.clearAllButton}
            onClick={() => {
              setFilters({
                sortBy: "",
                price: "",
                cuisine: "",
                dietaryChoice: "",
                consumeBy: "",
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

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid2";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import commonStyles from "@/styles/common.module.scss";
import { useRouter } from "next/router";
import { getMainFilterVariant1, FiltersState, FilterConfig } from "./mainFilterOptions";
import { FC, useEffect, useState } from "react";

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
  const router = useRouter();

  const isCubiFood = router.pathname === "/cubifood";
  const selectThemeColor = isCubiFood ? "#08834e" : "primary";
  const menuItemSelectedColor = isCubiFood ? "#c5f2e0 !important" : "#cfe3fc !important";
  const menuItemHoverColor = isCubiFood ? "#e7fef4" : "var(--primary-light)";

  /* Ensure filterOptions is always an array */
  const filterOptions: FilterConfig[] = router.pathname.startsWith("/cubifood")
    ? getMainFilterVariant1()
    : [];

  const initialFilters: FiltersState = {
    sortBy: "",
    price: "",
    cuisine: "",
    dietaryChoice: "",
  };

  const [filters, setFilters] = useState<FiltersState>(initialFilters);

  const applyCategoryImage = (key: string, value: string): string => {
    const selectedItem = categories.find((category) => category.name === value);
    return selectedItem
      ? selectedItem.src
      : "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1740098614/filtered_icon_ll8b8e.svg";
  };

  const handleFilterChange = (key: keyof FiltersState, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));

    if (key === "cuisine") {
      const image = applyCategoryImage(key, value);
      onApplyFilters(image, value);
    }
  };

  const handleApplyFilters = () => {
    const cuisineImage = applyCategoryImage("cuisine", filters.cuisine);
    onApplyFilters(cuisineImage, filters.cuisine);
  };

  const handleClearFilters = () => {
    setFilters(initialFilters);
    onClearFilters();
  };

  useEffect(() => {
    if (selectedCategory) {
      setFilters((prev) => ({
        ...prev,
        cuisine: selectedCategory,
      }));
    }
  }, [selectedCategory]);

  const isAnyFilterSelected = Object.values(filters).some((value) => value !== "");

  return (
    <Box className={commonStyles.mainFilter}>
      <Grid container spacing={1} className={commonStyles.filterContent}>
        {filterOptions.map(({ label, id, options, dynamic, size }) => (
          <Grid size={size} key={id}>
            <FormControl
              fullWidth
              sx={{
                "& .MuiInputLabel-root": {
                  "&:active, &.Mui-focused": { color: selectThemeColor },
                },
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset, &.Mui-focused fieldset": {
                    borderColor: selectThemeColor,
                  },
                },
              }}
            >
              <InputLabel id={`${id}Label`}>{label}</InputLabel>
              <Select
                labelId={`${id}Label`}
                id={`${id}Select`}
                value={filters[id]}
                label={label}
                onChange={(e) => handleFilterChange(id, e.target.value)}
                MenuProps={{
                  disableScrollLock: true,
                }}
                sx={{
                  backgroundColor: "white",
                  "& .MuiSelect-select, &.MuiOutlinedInput-root": {
                    backgroundColor: "white",
                  },
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
                      "&:hover": { background: menuItemHoverColor },
                      "&.Mui-selected": { background: menuItemSelectedColor },
                    }}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        ))}

        <Grid size={4} textAlign="right" className={commonStyles.filterOptions}>
          <Button size="large" onClick={handleClearFilters} className={isCubiFood ? commonStyles.clearAllButtonVariant1 : ""}>
            Clear All
          </Button>
          <Button
            variant="contained"
            size="large"
            className={isCubiFood ? commonStyles.applyFiltersButtonVariant1 : ""}
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

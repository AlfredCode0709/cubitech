import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid2";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import commonStyles from "../../styles/common.module.scss";
import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { getMainFilterVariant1 } from "./mainFilterOptions";

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
  const { user } = useUser();
  const isLoggedIn = !!user;

  const filterOptions = router.pathname.startsWith("/cubifood")
    ? getMainFilterVariant1(isLoggedIn)
    : null;

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
      const selectedCuisineItem = categories.find(
        (category) => category.name === value,
      );
      const image = selectedCuisineItem
        ? selectedCuisineItem.src
        : "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1740098614/filtered_icon_ll8b8e.svg";
      onApplyFilters(image, value);
    }
  };

  const handleApplyFilters = () => {
    const selectedCuisineItem = categories.find(
      (category) => category.name === filters.cuisine,
    );
    const image = selectedCuisineItem
      ? selectedCuisineItem.src
      : "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1740098614/filtered_icon_ll8b8e.svg";
    onApplyFilters(image, filters.cuisine);
  };

  useEffect(() => {
    if (selectedCategory) {
      setFilters((prev) => ({
        ...prev,
        cuisine: selectedCategory,
      }));
    }
  }, [selectedCategory]);

  const isAnyFilterSelected = Object.values(filters).some(
    (value) => value !== "",
  );

  return (
    <Box className={commonStyles.mainFilter}>
      <Grid container spacing={1} className={commonStyles.filterContent}>
        {filterOptions?.map(({ label, id, options, dynamic, size }) => (
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
                      "&:hover": { background: "#e7fef4" },
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
            className={commonStyles.clearAllButton}
            onClick={() => {
              setFilters({
                sortBy: "",
                price: "",
                cuisine: "",
                dietaryChoice: "",
                consumeBy: "",
              });
              onClearFilters();
            }}
          >
            Clear All
          </Button>
          <Button
            className={commonStyles.applyFiltersButton}
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

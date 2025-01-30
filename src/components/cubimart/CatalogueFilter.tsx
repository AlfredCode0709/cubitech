import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import styles from "../../styles/cubifood.module.scss";

interface CatalogueFilterProps {
  categories: { name: string; src: string }[];
  selectedCategory: string | null;
  onApplyFilters: (image: string, category: string | null) => void;
  onClearFilters: () => void;
}

const CatalogueFilter: React.FC<CatalogueFilterProps> = ({
  categories,
  selectedCategory,
  onApplyFilters,
  onClearFilters,
}) => {
  const [filters, setFilters] = useState({
    sortBy: "",
    category: selectedCategory || "",
    shippingFrom: "",
    shippingOption: "",
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    if (key === "category") {
      const selectedCategoryItem = categories.find(
        (category) => category.name === value
      );
      const image = selectedCategoryItem
        ? selectedCategoryItem.src
        : "./filtered_icon.svg";
      onApplyFilters(image, value); // Sync category selection
    }
  };

  const handleApplyFilters = () => {
    const selectedCategoryItem = categories.find(
      (category) => category.name === filters.category
    );
    const image = selectedCategoryItem
      ? selectedCategoryItem.src
      : "./filtered_icon.svg"; // Use category image or fallback
    onApplyFilters(image, filters.category); // Trigger the callback with image and category
  };

  // Update filters when selectedCategory changes
  useEffect(() => {
    if (selectedCategory) {
      setFilters((prev) => ({
        ...prev,
        category: selectedCategory,
      }));
    }
  }, [selectedCategory]);

  return (
    <Box className={styles.catalogueFilter}>
      <Grid container spacing={1} className={styles.gridContainer}>
        {[
          {
            label: "Sort by",
            id: "sortBy",
            options: [
              { value: "bestMatch", label: "Best Match" },
              { value: "lowToHighPrice", label: "Low to High Price" },
              { value: "highToLowPrice", label: "High to Low Price" },
            ],
          },
          {
            label: "Category",
            id: "category",
            options: categories.map((category) => ({
              value: category.name,
              label: category.name,
            })),
          },
          {
            label: "Shipping From",
            id: "shippingFrom",
            options: [
              { value: "Singapore", label: "Singapore" },
              { value: "Malaysia", label: "Malaysia" },
              { value: "Indonesia", label: "Indonesia" },
              { value: "Vietnam", label: "Vietnam" },
              { value: "Thailand", label: "Thailand" },
              { value: "Taiwan", label: "Taiwan" },
              { value: "Korea", label: "Korea" },
              { value: "Japan", label: "Japan" },
            ],
          },
          {
            label: "Shipping Option",
            id: "shippingOption",
            options: [
              { value: "selfCollection", label: "Self Collection" },
              { value: "doorstepDelivery", label: "Doorstep Delivery" },
              { value: "threeToFiveDay", label: "3-5 Day Delivery" },
              { value: "nextDay", label: "Next Day Delivery" },
              { value: "scheduled", label: "Scheduled Delivery" },
              { value: "storePickUp", label: "Seller Store Pick Up" },
            ],
          },
        ].map(({ label, id, options }) => (
          <Grid item xs={2.25} key={id}>
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
                {options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        ))}

        <Grid item xs={3} textAlign="right">
          <Button
            className={styles.clearAllButton}
            onClick={() => {
              setFilters({
                sortBy: "",
                category: "",
                shippingFrom: "",
                shippingOption: "",
              });
              onClearFilters(); // Call the function to clear filters in the parent
            }}
          >
            Clear All
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleApplyFilters} // Apply filters on click
          >
            Apply Filters
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CatalogueFilter;

export interface FilterConfig {
  label: string;
  id: keyof FiltersState;
  size: number;
  options?: { value: string; label: string }[];
  dynamic?: boolean;
}

export interface FiltersState {
  sortBy: string;
  price: string;
  cuisine: string;
  dietaryChoice: string;
}

export const getMainFilterVariant1 = (): FilterConfig[] => [
  {
    label: "Sort by",
    id: "sortBy",
    size: 2,
    options: [
      { value: "preparationTime", label: "Preparation Time" },
      { value: "distance", label: "Distance" },
    ],
  },
  {
    label: "Price",
    id: "price",
    size: 2,
    options: [
      { value: "0to10", label: "$0 - $10" },
      { value: "10to20", label: "$10 - $20" },
      { value: "above20", label: "$20+" },
    ],
  },
  {
    label: "Cuisine",
    id: "cuisine",
    size: 2,
    dynamic: true,
  },
  {
    label: "Dietary Choice",
    id: "dietaryChoice",
    size: 2,
    options: [
      { value: "halal", label: "Halal" },
      { value: "healthierChoice", label: "Healthier Choice" },
      { value: "vegetarian", label: "Vegetarian" },
    ],
  },
];

export const mainFilterOptions = [
  {
    label: "Sort by",
    id: "sortBy",
    options: [
      { value: "preparationTime", label: "Preparation Time" },
      { value: "distance", label: "Distance" },
    ],
  },
  {
    label: "Price",
    id: "price",
    options: [
      { value: "0to10", label: "$0 - $10" },
      { value: "10to20", label: "$10 - $20" },
      { value: "above20", label: "$20+" },
    ],
  },
  {
    label: "Cuisine",
    id: "cuisine",
    dynamic: true, // Marks this as needing category data
  },
  {
    label: "Dietary Preferences",
    id: "dietaryPreferences",
    options: [
      { value: "halal", label: "Halal" },
      { value: "healthierChoice", label: "Healthier Choice" },
      { value: "vegetarian", label: "Vegetarian" },
    ],
  },
];

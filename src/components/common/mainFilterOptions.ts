export const getMainFilterVariant1 = (isLoggedIn: any) => [
  {
    label: "Sort by",
    id: "sortBy",
    size: isLoggedIn ? 1.75 : 2,
    options: [
      { value: "preparationTime", label: "Preparation Time" },
      { value: "distance", label: "Distance" },
    ],
  },
  {
    label: "Price",
    id: "price",
    size: isLoggedIn ? 1.5 : 2,
    options: [
      { value: "0to10", label: "$0 - $10" },
      { value: "10to20", label: "$10 - $20" },
      { value: "above20", label: "$20+" },
    ],
  },
  {
    label: "Cuisine",
    id: "cuisine",
    size: isLoggedIn ? 1.5 : 2,
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
  ...(isLoggedIn
    ? [
        {
          label: "Consume By",
          id: "consumeBy",
          size: 1.75,
          options: [
            { value: "dineIn", label: "Dine-in" },
            { value: "takeaway", label: "Takeaway" },
            { value: "delivery", label: "Delivery" },
          ],
        },
      ]
    : []),
];

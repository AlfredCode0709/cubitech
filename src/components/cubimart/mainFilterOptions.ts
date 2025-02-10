export const mainFilterOptions = [
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
    dynamic: true, // Marks this as needing category data
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
];

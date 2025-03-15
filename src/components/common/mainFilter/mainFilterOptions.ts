// export const getMainFilterVariant1 = (isLoggedIn: boolean) => [
export const getMainFilterVariant1 = () => [
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
    // size: isLoggedIn ? 1.25 : 2,
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
    // size: isLoggedIn ? 1.75 : 2, 
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
  // ...(isLoggedIn
  //   ? [
  //       {
  //         label: "Consume By",
  //         id: "consumeBy",
  //         size: 1.5,
  //         options: [
  //           { value: "dineIn", label: "Dine-in" },
  //           { value: "takeaway", label: "Takeaway" },
  //           { value: "delivery", label: "Delivery" },
  //         ],
  //       },
  //     ]
  //   : []),
];

// export const getMainFilterVariant2 = (isLoggedIn: boolean) => [
export const getMainFilterVariant2 = () => [
  {
    label: "Sort by",
    id: "sortBy",
    // size: isLoggedIn ? 1.75 : 2,
    size: 2,
    options: [
      { value: "bestMatch", label: "Best Match" },
      { value: "lowToHighPrice", label: "Low to High Price" },
      { value: "highToLowPrice", label: "High to Low Price" },
    ],
  },
  {
    label: "Category",
    id: "category",
    // size: isLoggedIn ? 1.5 : 2,
    size: 2,
    dynamic: true,
  },
  {
    label: "Shipping From",
    id: "shippingFrom",
    // size: isLoggedIn ? 1.5 : 2,
    size: 2,
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
    size: 2,
    options: [
      { value: "selfCollection", label: "Self Collection" },
      { value: "doorstepDelivery", label: "Doorstep Delivery" },
      { value: "storePickUp", label: "Seller Store Pick Up" },
    ],
  },
  // ...(isLoggedIn
  //   ? [
  //       {
  //         label: "Promotions",
  //         id: "consumeBy",
  //         size: 1.75,
  //         options: [
  //           { value: "freeShipping", label: "Free Shipping" },
  //           { value: "4_4_deals", label: "4.4 Deals" },
  //         ],
  //       },
  //     ]
  //   : []),
];

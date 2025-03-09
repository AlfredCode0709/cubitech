import axios from "axios";

interface CartItem {
  itemId: string;
  name: string;
  brand: string; // CUBIMart
  price: number;
  option: string;
  promotions?: string[]; // CUBIMart
  customizations?: string[]; // CUBIFood
  specialNotes?: string; // CUBIFood
  quantity: number;
}

interface CheckoutData {
  cartItems: CartItem[];
  currency: string;
  paymentMethod: string;
  subtotal: number;
  additionalCosts: number;
  discount: number;
  total: number;
  isCubiMart: boolean;
}

export const handleCheckout = async (checkoutData: CheckoutData) => {
  // Adjust the checkoutData based on isCubiMart
  const updatedCartItems = checkoutData.cartItems.map((item) => {
    if (checkoutData.isCubiMart) {
      // For CubiMart, you may want to include `brand`, `promotions`, etc.
      return {
        itemId: item.itemId,
        name: item.name,
        price: item.price,
        option: item.option,
        brand: item.brand,
        promotions: item.promotions,
        quantity: item.quantity,
      };
    } else {
      // For CubiFood, you may want to include `customizations`, `specialNotes`, etc.
      return {
        itemId: item.itemId,
        name: item.name,
        price: item.price,
        option: item.option,
        customizations: item.customizations,
        specialNotes: item.specialNotes,
        quantity: item.quantity,
      };
    }
  });

  const updatedCheckoutData = {
    ...checkoutData,
    cartItems: updatedCartItems, // Use the updated cart items based on `isCubiMart`
  };

  try {
    const response = await axios.post("/api/checkout", updatedCheckoutData);
    return response.data;
  } catch (error: any) {
    console.error("Checkout Error:", error.response?.data || error.message);
    throw new Error(error.response?.data?.error || "Checkout failed");
  }
};

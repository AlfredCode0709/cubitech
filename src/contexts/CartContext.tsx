import { createContext, useReducer, useEffect, ReactNode } from "react";

interface CartItem {
  itemId: string;
  name: string;
  price: number;
  quantity: number;
  option?: string;
  customizations?: string[];
  specialNotes?: string;
  brand?: string;
  promotions?: string[];
}

interface CartState {
  cubiFood: CartItem[];
  cubiMart: CartItem[];
}

type CartAction =
  | { type: "ADD_CART_ITEM"; payload: { item: CartItem; isCubiMart: boolean } }
  | { type: "REMOVE_CART_ITEM"; payload: { itemId: string; isCubiMart: boolean } };

const initialState: CartState = {
  cubiFood: [],
  cubiMart: [],
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_CART_ITEM": {
      const { item, isCubiMart } = action.payload;
      const cartKey = isCubiMart ? "cubiMart" : "cubiFood";
      const existingCart = state[cartKey];

      // Check if item exists
      const existingItemIndex = existingCart.findIndex(
        (cartItem) => cartItem.itemId === item.itemId
      );

      let updatedCart;
      if (existingItemIndex !== -1) {
        updatedCart = existingCart.map((cartItem, index) =>
          index === existingItemIndex
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        updatedCart = [...existingCart, item];
      }

      sessionStorage.setItem(cartKey, JSON.stringify(updatedCart));
      return { ...state, [cartKey]: updatedCart };
    }

    case "REMOVE_CART_ITEM": {
      const { itemId, isCubiMart } = action.payload;
      const cartKey = isCubiMart ? "cubiMart" : "cubiFood";
      const updatedCart = state[cartKey].filter(
        (cartItem) => cartItem.itemId !== itemId
      );

      sessionStorage.setItem(cartKey, JSON.stringify(updatedCart));
      return { ...state, [cartKey]: updatedCart };
    }

    default:
      return state;
  }
};

export const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState, () => {
    if (typeof window !== "undefined") {
      const storedCubiFood = sessionStorage.getItem("cubiFood");
      const storedCubiMart = sessionStorage.getItem("cubiMart");

      return {
        cubiFood: storedCubiFood ? JSON.parse(storedCubiFood) : [],
        cubiMart: storedCubiMart ? JSON.parse(storedCubiMart) : [],
      };
    }
    return initialState;
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
  useEffect,
} from "react";

export interface CubiFoodItem {
  cartId: number;
  itemId: string;
  name: string;
  price: number;
  option: string;
  customizations: string[];
  specialNotes?: string;
  quantity: number;
}

export interface CubiMartItem {
  cartId: number;
  itemId: string;
  name: string;
  price: number;
  brand: string;
  option: string;
  promotions: string[];
  quantity: number;
}

interface CartState {
  cubiFoodItems: CubiFoodItem[];
  cubiMartItems: CubiMartItem[];
}

type CartAction =
  | {
      type: "ADD_CART_ITEM";
      payload: Omit<CubiMartItem, "cartId"> | Omit<CubiFoodItem, "cartId">;
      isCubiMart: boolean;
    }
  | { type: "REMOVE_CART_ITEM"; payload: number; isCubiMart: boolean }
  | {
      type: "UPDATE_QUANTITY";
      payload: { cartId: number; quantity: number };
      isCubiMart: boolean;
    }
  | { type: "CLEAR_CART"; isCubiMart: boolean };

const initialState: CartState = {
  cubiFoodItems: [],
  cubiMartItems: [],
};

const CartContext = createContext<{
  state: CartState;
  dispatch: Dispatch<CartAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

const cartReducer = (state: CartState, action: CartAction): CartState => {
  let updatedState = { ...state };

  switch (action.type) {
    case "ADD_CART_ITEM": {
      const cartId = Date.now() + Math.random(); // Generate a unique cartId

      if (action.isCubiMart) {
        const newItem: CubiMartItem = {
          cartId,
          ...action.payload,
        } as CubiMartItem;
        const existingItem = state.cubiMartItems.find(
          (item) =>
            item.itemId === newItem.itemId && item.option === newItem.option
        );

        if (existingItem) {
          updatedState.cubiMartItems = state.cubiMartItems.map((item) =>
            item.cartId === existingItem.cartId
              ? { ...item, quantity: item.quantity + newItem.quantity }
              : item
          );
        } else {
          updatedState.cubiMartItems = [...state.cubiMartItems, newItem];
        }
      } else {
        const newItem: CubiFoodItem = {
          cartId,
          ...action.payload,
        } as CubiFoodItem;
        const existingItem = state.cubiFoodItems.find(
          (item) =>
            item.itemId === newItem.itemId && item.option === newItem.option
        );

        if (existingItem) {
          updatedState.cubiFoodItems = state.cubiFoodItems.map((item) =>
            item.cartId === existingItem.cartId
              ? { ...item, quantity: item.quantity + newItem.quantity }
              : item
          );
        } else {
          updatedState.cubiFoodItems = [...state.cubiFoodItems, newItem];
        }
      }
      break;
    }

    case "UPDATE_QUANTITY":
      updatedState = action.isCubiMart
        ? {
            ...state,
            cubiMartItems: state.cubiMartItems.map((item) =>
              item.cartId === action.payload.cartId
                ? { ...item, quantity: action.payload.quantity }
                : item
            ),
          }
        : {
            ...state,
            cubiFoodItems: state.cubiFoodItems.map((item) =>
              item.cartId === action.payload.cartId
                ? { ...item, quantity: action.payload.quantity }
                : item
            ),
          };
      break;

    case "REMOVE_CART_ITEM":
      updatedState = action.isCubiMart
        ? {
            ...state,
            cubiMartItems: state.cubiMartItems.filter(
              (item) => item.cartId !== action.payload
            ),
          }
        : {
            ...state,
            cubiFoodItems: state.cubiFoodItems.filter(
              (item) => item.cartId !== action.payload
            ),
          };
      break;

    case "CLEAR_CART": {
      updatedState = action.isCubiMart
        ? { ...state, cubiMartItems: [] }
        : { ...state, cubiFoodItems: [] };
      break;
    }

    default:
      return state;
  }

  // Persist cart to sessionStorage
  if (typeof window !== "undefined") {
    sessionStorage.setItem("cart", JSON.stringify(updatedState));
  }

  return updatedState;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = sessionStorage.getItem("cart");
      if (savedCart) {
        const parsedState: CartState = JSON.parse(savedCart);

        dispatch({ type: "CLEAR_CART", isCubiMart: true });
        dispatch({ type: "CLEAR_CART", isCubiMart: false });

        parsedState.cubiMartItems.forEach((item) => {
          dispatch({ type: "ADD_CART_ITEM", payload: item, isCubiMart: true });
        });
        parsedState.cubiFoodItems.forEach((item) => {
          dispatch({ type: "ADD_CART_ITEM", payload: item, isCubiMart: false });
        });
      }
    }
  }, []);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
  useEffect,
} from "react";

interface CartItem {
  cartId: number;
  itemId: any;
  name: string;
  price: number;
  option: string;
  customizations: string[];
  specialNotes?: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  lastId: number;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: Omit<CartItem, "cartId"> }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "CLEAR_CART" }
  | { type: "SET_LAST_ID"; payload: number }
  | { type: "UPDATE_QUANTITY"; payload: { cartId: number; quantity: number } };

const initialState: CartState = {
  items: [],
  lastId: 0,
};

const CartContext = createContext<{
  state: CartState;
  dispatch: Dispatch<CartAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

const cartReducer = (state: CartState, action: CartAction): CartState => {
  let updatedState = state;

  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find(
        (item) =>
          item.itemId === action.payload.itemId &&
          item.option === action.payload.option,
      );

      if (existingItem) {
        /* Increase quantity of existing item instead of adding a duplicate */
        updatedState = {
          ...state,
          items: state.items.map((item) =>
            item.cartId === existingItem.cartId
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item,
          ),
        };
      } else {
        /* Assign a new cartId and add item */
        const newCartId = state.lastId + 1;
        const newItem: CartItem = { cartId: newCartId, ...action.payload };

        updatedState = {
          ...state,
          items: [...state.items, newItem],
          lastId: newCartId,
        };
      }
      break;
    }
    case "REMOVE_ITEM":
      updatedState = {
        ...state,
        items: state.items.filter((item) => item.cartId !== action.payload),
      };
      break;
    case "CLEAR_CART":
      updatedState = {
        ...state,
        items: [],
        lastId: 0,
      };
      break;
    case "SET_LAST_ID":
      updatedState = {
        ...state,
        lastId: action.payload,
      };
      break;
    case "UPDATE_QUANTITY":
      updatedState = {
        ...state,
        items: state.items.map((item) =>
          item.cartId === action.payload.cartId
            ? { ...item, quantity: action.payload.quantity }
            : item,
        ),
      };
      break;
    default:
      return state;
  }

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

        if (Array.isArray(parsedState.items)) {
          dispatch({ type: "CLEAR_CART" });

          parsedState.items.forEach((item) => {
            dispatch({ type: "ADD_ITEM", payload: { ...item } });
          });

          dispatch({ type: "SET_LAST_ID", payload: parsedState.lastId ?? 0 });
        }
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

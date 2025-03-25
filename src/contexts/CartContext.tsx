import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
  useEffect,
} from "react";
import { openDB } from "idb";

export interface CubiFoodItem {
  cartId: number;
  itemId: string;
  itemName: string;
  price: number;
  option: string;
  customisations: string[];
  specialNotes?: string;
  quantity: number;
}

export interface CubiMartItem {
  cartId: number;
  itemId: string;
  itemName: string;
  price: number;
  brandName: string;
  option: string;
  promotions: string[];
  quantity: number;
}

interface CartState {
  cubiFoodItems: CubiFoodItem[];
  cubiMartItems: CubiMartItem[];
}

export type CartAction =
  | {
      type: "ADD_CART_ITEM";
      payload: Omit<CubiMartItem, "cartId"> | Omit<CubiFoodItem, "cartId">;
      isCubiMart: boolean;
    }
  | {
      type: "UPDATE_QUANTITY";
      payload: { cartId: number; quantity: number };
      isCubiMart: boolean;
    }
  | {
      type: "UPDATE_CART_ITEM_QUANTITY";
      payload: { cartId: number; quantity: number };
      isCubiMart: boolean;
    }
  | { type: "REMOVE_CART_ITEM"; payload: number; isCubiMart: boolean }
  | { type: "CLEAR_CART"; isCubiMart: boolean }
  | {
      type: "CLEAR_CART_GROUP";
      payload: { itemId: string; isCubiMart: boolean };
    }
  | { type: "LOAD_CART"; payload: CartState };

const initialState: CartState = {
  cubiFoodItems: [],
  cubiMartItems: [],
};

const DB_NAME = "CubitechCartDB";
const STORE_NAME = "cart";

async function getDB() {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      db.createObjectStore(STORE_NAME);
    },
  });
}

async function saveCartToDB(cart: CartState) {
  const db = await getDB();
  const tx = db.transaction(STORE_NAME, "readwrite");
  await tx.objectStore(STORE_NAME).put(cart, "cart");
  await tx.done;
}

async function loadCartFromDB(): Promise<CartState> {
  const db = await getDB();
  return (
    (await db.transaction(STORE_NAME).objectStore(STORE_NAME).get("cart")) ||
    initialState
  );
}

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
      const cartId = Date.now() + Math.random();

      if (action.isCubiMart) {
        const newItem: CubiMartItem = {
          cartId,
          ...action.payload,
        } as CubiMartItem;
        const existingItem = state.cubiMartItems.find(
          (item) =>
            item.itemId === newItem.itemId && item.option === newItem.option
        );

        updatedState.cubiMartItems = existingItem
          ? state.cubiMartItems.map((item) =>
              item.cartId === existingItem.cartId
                ? { ...item, quantity: item.quantity + newItem.quantity }
                : item
            )
          : [...state.cubiMartItems, newItem];
      } else {
        const newItem: CubiFoodItem = {
          cartId,
          ...action.payload,
        } as CubiFoodItem;
        const existingItem = state.cubiFoodItems.find(
          (item) =>
            item.itemId === newItem.itemId && item.option === newItem.option
        );

        updatedState.cubiFoodItems = existingItem
          ? state.cubiFoodItems.map((item) =>
              item.cartId === existingItem.cartId
                ? { ...item, quantity: item.quantity + newItem.quantity }
                : item
            )
          : [...state.cubiFoodItems, newItem];
      }

      saveCartToDB(updatedState); 
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

      saveCartToDB(updatedState);
      break;

    case "UPDATE_CART_ITEM_QUANTITY":
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

      saveCartToDB(updatedState);
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

      saveCartToDB(updatedState);
      break;

    case "CLEAR_CART":
      updatedState = action.isCubiMart
        ? { ...state, cubiMartItems: [] }
        : { ...state, cubiFoodItems: [] };

      saveCartToDB(updatedState);
      break;

    case "CLEAR_CART_GROUP":
      updatedState = action.payload.isCubiMart
        ? {
            ...state,
            cubiMartItems: state.cubiMartItems.filter(
              (item) => item.itemId !== action.payload.itemId
            ),
          }
        : {
            ...state,
            cubiFoodItems: state.cubiFoodItems.filter(
              (item) => item.itemId !== action.payload.itemId
            ),
          };

      saveCartToDB(updatedState);
      break;

    case "LOAD_CART":
      return action.payload;

    default:
      return state;
  }

  return updatedState;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    async function initializeCart() {
      const savedCart = await loadCartFromDB();
      dispatch({ type: "LOAD_CART", payload: savedCart });
    }
    initializeCart();
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

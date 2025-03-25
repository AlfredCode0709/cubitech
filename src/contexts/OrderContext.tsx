import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { openDB } from "idb";

export interface CubiFoodItem {
  cartId: number;
  itemId: string;
  itemName: string;
  price: number;
  option: string;
  customisations?: string[];
  specialNotes?: string;
  quantity: number;
}

export interface CubiMartItem {
  cartId: number;
  itemId: string;
  itemName: string;
  price: number;
  brandName?: string;
  promotions?: string[];
  option: string;
  quantity: number;
}

// Define the OrderState interface
export interface OrderState {
  cubiFood: {
    orderItems: CubiFoodItem[];
    subtotal: number;
    additionalCosts: number;
    discount: number;
    total: number;
  };
  cubiMart: {
    orderItems: CubiMartItem[];
    subtotal: number;
    additionalCosts: number;
    discount: number;
    total: number;
  };
}

const initialState: OrderState = {
  cubiFood: {
    orderItems: [],
    subtotal: 0,
    additionalCosts: 0,
    discount: 0,
    total: 0,
  },
  cubiMart: {
    orderItems: [],
    subtotal: 0,
    additionalCosts: 0,
    discount: 0,
    total: 0,
  },
};

type OrderAction =
  | { type: "ADD_ORDER"; payload: OrderState }
  | { type: "LOAD_ORDER"; payload: OrderState }
  | { type: "CLEAR_ORDER" };

const DB_NAME = "CubitechOrderDB";
const STORE_NAME = "orders";

// Initialize IndexedDB
async function getDB() {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      db.createObjectStore(STORE_NAME);
    },
  });
}

// Save the order data to IndexedDB
async function saveOrderToDB(order: OrderState): Promise<void> {
  const db = await getDB();
  const tx = db.transaction(STORE_NAME, "readwrite");
  await tx.objectStore(STORE_NAME).put(order, "order");
  await tx.done;
}

// Load the order data from IndexedDB
async function loadOrderFromDB(): Promise<OrderState> {
  const db = await getDB();
  const savedOrder = await db.transaction(STORE_NAME).objectStore(STORE_NAME).get("order");
  return savedOrder || initialState; // Return the initial state if no order is found
}

// Clear the order from IndexedDB
async function clearOrderFromDB(): Promise<void> {
  const db = await getDB();
  const tx = db.transaction(STORE_NAME, "readwrite");
  await tx.objectStore(STORE_NAME).delete("order");
  await tx.done;
}

// Define the context with state and dispatch
const OrderContext = createContext<{
  state: OrderState;
  dispatch: Dispatch<OrderAction>;
}>({
  state: initialState,
  dispatch: () => {}, // Default to a no-op function
});

// The reducer function that updates the state based on actions
const orderReducer = (state: OrderState, action: OrderAction): OrderState => {
  let updatedState = { ...state };

  switch (action.type) {
    case "ADD_ORDER":
      updatedState = { ...action.payload };
      saveOrderToDB(updatedState); // Save to DB after updating
      break;

    case "LOAD_ORDER":
      updatedState = { ...action.payload }; // Load order state
      break;

    case "CLEAR_ORDER":
      updatedState = initialState; // Reset to initial state
      clearOrderFromDB(); // Clear from DB
      break;

    default:
      return state;
  }

  return updatedState;
};

// OrderProvider component that provides the context state and dispatch
export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  // Load the order from IndexedDB on component mount
  useEffect(() => {
    async function initializeOrder() {
      const savedOrder = await loadOrderFromDB();
      dispatch({ type: "LOAD_ORDER", payload: savedOrder });
    }
    initializeOrder();
  }, []);

  return (
    <OrderContext.Provider value={{ state, dispatch }}>
      {children}
    </OrderContext.Provider>
  );
};

// Custom hook to access the order state and dispatch
export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
};

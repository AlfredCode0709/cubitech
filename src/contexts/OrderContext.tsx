import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";

/* Define the structure for the order data */
interface OrderData {
  isCubiMart?: boolean;
  orderItems: Array<any>;
  subtotal: number;
  additionalCosts: number;
  discount: number;
  total: number;
}

/* Define the action types */
type OrderAction =
  | { type: "SET_ORDER"; payload: OrderData }
  | { type: "CLEAR_ORDER" };

/* Define the initial state type */
const initialState: OrderData = {
  isCubiMart: false,
  orderItems: [],
  subtotal: 0,
  additionalCosts: 0,
  discount: 0,
  total: 0,
};

/* Create the reducer function */
const orderReducer = (state: OrderData, action: OrderAction): OrderData => {
  switch (action.type) {
    case "SET_ORDER":
      return { ...action.payload }; /* Set the order data */
    case "CLEAR_ORDER":
      return initialState; /* Clear the order data */
    default:
      return state;
  }
};

/* Create the context */
const OrderContext = createContext<{
  state: OrderData;
  dispatch: Dispatch<OrderAction>;
}>({
  state: initialState,
  dispatch: () => {} /* Placeholder for dispatch */,
});

/* Create the provider component */
export const OrderProvider = ({ children }: { children: ReactNode }) => {
  // Check if the code is running in the browser
  const isBrowser = typeof window !== "undefined";

  // Initialize the state with sessionStorage data if it exists (only on the client)
  const storedOrderData = isBrowser
    ? sessionStorage.getItem("orderData")
    : null;
  const initialOrderState = storedOrderData
    ? JSON.parse(storedOrderData)
    : initialState;

  const [state, dispatch] = useReducer(orderReducer, initialOrderState);

  /* Store order data in sessionStorage whenever it changes */
  useEffect(() => {
    if (isBrowser && state && Object.keys(state).length > 0) {
      sessionStorage.setItem("orderData", JSON.stringify(state));
    }
  }, [state, isBrowser]);

  return (
    <OrderContext.Provider value={{ state, dispatch }}>
      {children}
    </OrderContext.Provider>
  );
};

/* Custom hook to use the order context */
export const useOrder = () => useContext(OrderContext);

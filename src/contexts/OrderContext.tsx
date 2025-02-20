import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
} from "react";

interface OrderItem {
  cartId: number;
  itemId: string;
  name: string;
  option: string;
  price: number;
  quantity: number;
  customizations: string[];
  specialNotes?: string;
}

interface OrderState {
  items: OrderItem[];
  subtotal: number;
  additionalCosts: number;
  discount: number;
  total: number;
}

type OrderAction =
  | { type: "SET_ORDER"; payload: OrderState }
  | { type: "CLEAR_ORDER" };

const initialState: OrderState = {
  items: [],
  subtotal: 0,
  additionalCosts: 0,
  discount: 0,
  total: 0,
};

const OrderContext = createContext<{
  state: OrderState;
  dispatch: React.Dispatch<OrderAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

const orderReducer = (state: OrderState, action: OrderAction): OrderState => {
  let newState;

  switch (action.type) {
    case "SET_ORDER":
      newState = { ...action.payload };
      break;
    case "CLEAR_ORDER":
      newState = initialState;
      break;
    default:
      return state;
  }

  /* Persist to sessionStorage */
  if (typeof window !== "undefined") {
    sessionStorage.setItem("order", JSON.stringify(newState));
  }

  return newState;
};

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  /* Load from sessionStorage if available */
  const storedOrder =
    typeof window !== "undefined" ? sessionStorage.getItem("order") : null;
  const initialOrderState = storedOrder
    ? JSON.parse(storedOrder)
    : initialState;

  const [state, dispatch] = useReducer(orderReducer, initialOrderState);

  /* Sync changes with sessionStorage */
  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("order", JSON.stringify(state));
    }
  }, [state]);

  return (
    <OrderContext.Provider value={{ state, dispatch }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
};

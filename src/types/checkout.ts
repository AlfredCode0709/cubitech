// types/checkout.ts
import { CubiFoodItem, CubiMartItem } from "@/contexts/CartContext";

export interface CubiFoodOrder {
  orderItems: CubiFoodItem[]; // This ensures only CubiFoodItem[] is allowed
  subtotal: number;
  additionalCosts: number;
  discount: number;
  total: number;
}

export interface CubiMartOrder {
  orderItems: CubiMartItem[]; // This ensures only CubiMartItem[] is allowed
  subtotal: number;
  additionalCosts: number;
  discount: number;
  total: number;
}

export interface CheckoutState {
  cubiFood?: CubiFoodOrder;
  cubiMart?: CubiMartOrder;
}

import ShoppingCartData from "./ShoppingCartData";
import ShoppingCartHeader from "./ShoppingCartHeader";
import { CartAction, CubiFoodItem, CubiMartItem } from "@/contexts/CartContext";
import { Dispatch, FC, Fragment } from "react";

interface ShoppingCartDisplayProps {
  isCubiMart: boolean;
  items: CubiFoodItem[] | CubiMartItem[];
  dispatch: Dispatch<CartAction>;
}

const ShoppingCartDisplay: FC<ShoppingCartDisplayProps> = ({
  isCubiMart,
  items,
  dispatch,
}) => {
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleEmptyCart = () => {
    dispatch({ type: "CLEAR_CART", isCubiMart });
  };

  return (
    <Fragment>
      <ShoppingCartHeader
        totalQuantity={totalQuantity}
        handleEmptyCart={handleEmptyCart}
      />

      <ShoppingCartData
        isCubiMart={isCubiMart}
        items={items}
      />
    </Fragment>
  );
};

export default ShoppingCartDisplay;

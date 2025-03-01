import ShoppingCartData from "./ShoppingCartData";
import ShoppingCartHeader from "./ShoppingCartHeader";
import { FC } from "react";

interface ShoppingCartDisplayProps {
  items: any[];
  dispatch: any;
}

const ShoppingCartDisplay: FC<ShoppingCartDisplayProps> = ({
  items,
  dispatch,
}) => {
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleEmptyCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <>
      <ShoppingCartHeader
        totalQuantity={totalQuantity}
        handleEmptyCart={handleEmptyCart}
      />

      <ShoppingCartData items={items} subtotal={subtotal} />
    </>
  );
};

export default ShoppingCartDisplay;

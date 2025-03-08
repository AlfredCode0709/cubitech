// import ShoppingCartData from "./ShoppingCartData";
import ShoppingCartHeader from "./ShoppingCartHeader";
import { FC } from "react";

interface ShoppingCartDisplayProps {
  isCubiMart: boolean;
  items: any[];
  // dispatch: any;
}

const ShoppingCartDisplay: FC<ShoppingCartDisplayProps> = ({
  isCubiMart,
  items,
  // dispatch,
}) => {
  console.log(items);

  // const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  // const subtotal = items.reduce(
  //   (sum, item) => sum + item.price * item.quantity,
  //   0
  // );

  // const handleEmptyCart = () => {
  //   dispatch({ type: "CLEAR_CART", isCubiMart });
  // };

  return (
    <>
      {/* <ShoppingCartHeader
        totalQuantity={totalQuantity}
        handleEmptyCart={handleEmptyCart}
      /> */}

      {/* <ShoppingCartData
        isCubiMart={isCubiMart}
        items={items}
        subtotal={subtotal}
      /> */}
    </>
  );
};

export default ShoppingCartDisplay;

import ClearCartDialog from "./ClearCartDialog";
import ShoppingCartData from "./ShoppingCartData";
import ShoppingCartHeader from "./ShoppingCartHeader";
import { CartAction, CubiFoodItem, CubiMartItem } from "@/contexts/CartContext";
import { useSnackbar } from "notistack";
import { Dispatch, FC, Fragment, useState } from "react";

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
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleConfirmClear = () => {
    dispatch({ type: "CLEAR_CART", isCubiMart });
    setOpen(false);

    enqueueSnackbar("All items removed from cart!", {
      variant: "success",
    });
  };

  return (
    <Fragment>
      <ShoppingCartHeader
        totalQuantity={totalQuantity}
        handleEmptyCart={handleOpenDialog}
      />

      <ShoppingCartData isCubiMart={isCubiMart} items={items} />

      <ClearCartDialog
        open={open}
        handleCloseDialog={handleCloseDialog}
        handleConfirmClear={handleConfirmClear}
      />
    </Fragment>
  );
};

export default ShoppingCartDisplay;

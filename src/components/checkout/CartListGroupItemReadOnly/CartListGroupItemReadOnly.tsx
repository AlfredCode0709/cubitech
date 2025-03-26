import Box from "@mui/material/Box";
import CartListGroupItemData from "./CartListGroupItemData";
import styles from "@/styles/checkout.module.scss";
import { CubiFoodItem, CubiMartItem } from "@/contexts/CartContext";
import { FC } from "react";

interface CartListGroupItemProps {
  key: number;
  isCubiMart: boolean;
  items: (CubiFoodItem | CubiMartItem)[];
}

const CartListGroupItemReadOnly: FC<CartListGroupItemProps> = ({
  key,
  isCubiMart,
  items,
}) => {
  const typedItems = isCubiMart ? items as CubiMartItem[] : items as CubiFoodItem[];

  return (
    <Box className={styles.cartListGroupItemReadOnly} key={key}>
      <CartListGroupItemData isCubiMart={isCubiMart} items={typedItems} />
    </Box>
  );
};

export default CartListGroupItemReadOnly;

import Box from "@mui/material/Box";
import CartListGroupItemData from "./CartListGroupItemData";
import styles from "@/styles/cart.module.scss";
import { CubiFoodItem, CubiMartItem } from "@/contexts/CartContext";
import { FC } from "react";

interface CartListGroupItemProps {
  key: string;
  isCubiMart: boolean;
  items: CubiFoodItem[] | CubiMartItem[];
}

const CartListGroupItem: FC<CartListGroupItemProps> = ({
  key,
  isCubiMart,
  items,
}) => {
  return (
    <Box className={styles.cartListGroupItem} key={key}>
      <CartListGroupItemData isCubiMart={isCubiMart} items={items} />
    </Box>
  );
};

export default CartListGroupItem;

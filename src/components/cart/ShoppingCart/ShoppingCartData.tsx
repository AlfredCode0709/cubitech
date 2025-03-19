import Grid from "@mui/material/Grid2";
import CartListItem from "./CartListItem";
import CartListGroupItem from "../CartListGroupItem/CartListGroupItem";
import PaymentDetails from "../PaymentDetails";
import styles from "@/styles/cart.module.scss";
import { CubiFoodItem, CubiMartItem } from "@/contexts/CartContext";
import { FC, useMemo } from "react";

interface ShoppingCartDataProps {
  isCubiMart: boolean;
  items: CubiFoodItem[] | CubiMartItem[];
}

const ShoppingCartData: FC<ShoppingCartDataProps> = ({ isCubiMart, items }) => {
  // Group items by itemId
  const groupedItems = useMemo(() => {
    return items.reduce((acc, item) => {
      if (!acc[item.itemId]) {
        acc[item.itemId] = [];
      }
      acc[item.itemId].push(item);
      return acc;
    }, {} as Record<string, (CubiFoodItem | CubiMartItem)[]>);
  }, [items]);

  return (
    <Grid container spacing={2} className={styles.cartData}>
      <Grid size={8.5} container>
        {Object.values(groupedItems).map((group) => {
          const typedGroup = isCubiMart
            ? (group as CubiMartItem[])
            : (group as CubiFoodItem[]);

          return typedGroup.length > 1 ? (
            <CartListGroupItem
              key={typedGroup[0].itemId}
              isCubiMart={isCubiMart}
              items={typedGroup}
            />
          ) : (
            <CartListItem
              key={typedGroup[0].itemId}
              isCubiMart={isCubiMart}
              item={typedGroup[0]}
            />
          );
        })}
      </Grid>
      <Grid size={3.5}>
        <PaymentDetails isCubiMart={isCubiMart} items={items} />
      </Grid>
    </Grid>
  );
};

export default ShoppingCartData;

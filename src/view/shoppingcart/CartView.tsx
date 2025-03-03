import Box from "@mui/material/Box";
import ShoppingCartDisplay from "@/components/shoppingcart/ShoppingCartDisplay";
import EmptyCartDisplay from "@/components/shoppingcart/EmptyCartDisplay";
import Toggle from "@/components/shoppingcart/Toggle";
import styles from "../../styles/shoppingcart.module.scss";
import { FC } from "react";
import MoreItemsDrawer from "@/components/common/MoreItemsDrawer";

interface CartViewProps {
  state: any;
  dispatch: any;
  isCubiFood: boolean;
  setIsCubiFood: any;
}

const CartView: FC<CartViewProps> = ({
  state,
  dispatch,
  isCubiFood,
  setIsCubiFood,
}) => {
  const items = state.items;

  return (
    <>
      <Box className={styles.cartView}>
        <Toggle isCubiFood={isCubiFood} setIsCubiFood={setIsCubiFood} />

        {state.items.length > 0 ? (
          !isCubiFood ? (
            <ShoppingCartDisplay dispatch={dispatch} items={items} />
          ) : (
            <EmptyCartDisplay
              imageSrc={
                isCubiFood
                  ? "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1740469687/cubimart_emptycart_icon_cbhh4u.svg"
                  : "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1740135701/cubifood_emptycart_icon_ku3pne.svg"
              }
              shopLink={isCubiFood ? "/cubifood" : "/cubimart"}
            />
          )
        ) : (
          <EmptyCartDisplay
            imageSrc={
              isCubiFood
                ? "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1740469687/cubimart_emptycart_icon_cbhh4u.svg"
                : "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1740135701/cubifood_emptycart_icon_ku3pne.svg"
            }
            shopLink={isCubiFood ? "/cubifood" : "/cubimart"}
          />
        )}
      </Box>

      <MoreItemsDrawer
        totalItems={18}
        brand={!isCubiFood ? "CUBIFood" : "CUBIMart"}
      />
    </>
  );
};

export default CartView;

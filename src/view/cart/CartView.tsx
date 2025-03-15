import Box from "@mui/material/Box";
import EmptyCartDisplay from "@/components/cart/EmptyCartDisplay";
import MoreItemsDrawer from "@/components/common/MoreItemsDrawer";
import ShoppingCartDisplay from "@/components/cart/ShoppingCartDisplay";
import Toggle from "@/components/common/Toggle";
import styles from "@/styles/cart.module.scss";
import { FC, Fragment } from "react";

interface CartViewProps {
  state: any;
  dispatch: any;
  isCubiMart: boolean;
  setIsCubiMart: any;
}

const CartView: FC<CartViewProps> = ({
  state,
  dispatch,
  isCubiMart,
  setIsCubiMart,
}) => {
  const isEmpty =
    (isCubiMart && state?.cubiMartItems.length === 0) ||
    (!isCubiMart && state?.cubiFoodItems.length === 0);

  return (
    <Fragment>
      <Box className={styles.cartView}>
        <Toggle isCubiMart={isCubiMart} setIsCubiMart={setIsCubiMart} />

        {isEmpty ? (
          <EmptyCartDisplay
            imageSrc={
              isCubiMart
                ? "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1740469687/cubimart_emptycart_icon_cbhh4u.svg"
                : "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1740135701/cubifood_emptycart_icon_ku3pne.svg"
            }
            shopLink={isCubiMart ? "/cubimart" : "/cubifood"}
          />
        ) : (
          <ShoppingCartDisplay
            dispatch={dispatch}
            isCubiMart={isCubiMart}
            items={isCubiMart ? state.cubiMartItems : state.cubiFoodItems}
          />
        )}
      </Box>
      <MoreItemsDrawer
        totalItems={18}
        brand={isCubiMart ? "CUBIMart" : "CUBIFood"}
      />
    </Fragment>
  );
};

export default CartView;

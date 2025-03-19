import Box from "@mui/material/Box";
import EmptyCartDisplay from "@/components/cart/EmptyCartDisplay";
import MoreItemsDrawer from "@/components/common/MoreItemsDrawer";
import ShoppingCartDisplay from "@/components/cart/ShoppingCart/ShoppingCartDisplay";
import Toggle from "@/components/common/Toggle";
import styles from "@/styles/cart.module.scss";
import { useCart } from "@/contexts/CartContext";
import { FC, Fragment, useState } from "react";

const CartView: FC = () => {
  const { state, dispatch } = useCart();
  const [isCubiMart, setIsCubiMart] = useState(true);

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

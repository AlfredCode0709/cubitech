import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import EmptyCheckoutDisplay from "@/components/checkout/EmptyCheckoutDisplay";
import PaymentDetailsReadOnly from "@/components/checkout/PaymentDetailsReadOnly";
import Toggle from "@/components/common/Toggle";
import styles from "@/styles/checkout.module.scss";
import { useOrder } from "@/contexts/OrderContext";
import { FC, Fragment, useState } from "react";

const CheckoutView: FC = () => {
  const { state } = useOrder();
  const [isCubiMart, setIsCubiMart] = useState(true);

  const isEmpty =
    (isCubiMart && state.cubiMart.orderItems.length === 0) ||
    (!isCubiMart && state.cubiFood.orderItems.length === 0);

  const currentOrderState = isCubiMart ? state.cubiMart : state.cubiFood;

  return (
    <Fragment>
      <Box className={styles.checkout}>
        <Toggle isCubiMart={isCubiMart} setIsCubiMart={setIsCubiMart} />
        {isEmpty ? (
          <EmptyCheckoutDisplay
            imageSrc={
              isCubiMart
                ? "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1742044620/cubimart_empty_checkout_xobrx0.svg"
                : "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1742044620/cubifood_empty_checkout_ri9yeu.svg"
            }
            shopLink={isCubiMart ? "/cubimart" : "/cubifood"}
          />
        ) : (
          <Grid container spacing={2} className={styles.checkoutData}>
            <Grid size={7}>
              <CheckoutForm isCubiMart={isCubiMart} />
            </Grid>
            <Grid size={5}>
              <PaymentDetailsReadOnly state={currentOrderState} />
            </Grid>
          </Grid>
        )}
      </Box>
    </Fragment>
  );
};

export default CheckoutView;

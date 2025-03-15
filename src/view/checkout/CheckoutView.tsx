import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import EmptyCheckoutDisplay from "@/components/checkout/EmptyCheckoutDisplay";
import PaymentDetailsReadOnly from "@/components/checkout/PaymentDetailsReadOnly";
import Toggle from "@/components/common/Toggle";
import styles from "../../styles/checkout.module.scss";
import { FC, useState } from "react";

interface CheckoutViewProps {
  state: any;
}

const CheckoutView: FC<CheckoutViewProps> = ({ state }) => {
  const [isCubiMart, setIsCubiMart] = useState(true);

  const isEmpty =
    (isCubiMart && state?.cubiMart.orderItems.length === 0) ||
    (!isCubiMart && state?.cubiFood.orderItems.length === 0);

  return (
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
            <CheckoutForm isCubiMart={isCubiMart} state={state} />
          </Grid>
          <Grid size={5}>
            <PaymentDetailsReadOnly
              state={isCubiMart ? state.cubiMart : state.cubiFood}
            />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default CheckoutView;

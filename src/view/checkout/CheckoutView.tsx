import Box from "@mui/material/Box";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import Grid from "@mui/material/Grid2";
import PaymentDetailsReadOnly from "@/components/checkout/PaymentDetailsReadOnly";
import styles from '../../styles/checkout.module.scss'
import { useOrder } from "@/contexts/OrderContext";
import { FC } from "react";

const CheckoutView: FC = () => {
  const { state } = useOrder();
  
  const items = state?.items;
  const subtotal = state?.subtotal;

  return (
    <Box className={styles.checkout}>
      <Grid container spacing={2}>
        <Grid size={7}>
          <CheckoutForm items={items} />
        </Grid>
        <Grid size={5}>
          <PaymentDetailsReadOnly subtotal={subtotal} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CheckoutView;

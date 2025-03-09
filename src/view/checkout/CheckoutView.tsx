import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import PaymentDetailsReadOnly from "@/components/checkout/PaymentDetailsReadOnly";
import styles from "../../styles/checkout.module.scss";
import { FC } from "react";

interface CheckoutViewProps {
  state: any;
}

const CheckoutView: FC<CheckoutViewProps> = ({ state }) => {
  return (
    <Box className={styles.checkout}>
      <Grid container spacing={2}>
        <Grid size={7}>
          <CheckoutForm state={state} />
        </Grid>
        <Grid size={5}>
          <PaymentDetailsReadOnly state={state} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CheckoutView;

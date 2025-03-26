import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import styles from "../../styles/checkout.module.scss";
import { FC } from "react";

interface OrderState {
  subtotal: number;
  additionalCosts: number;
  discount: number;
  total: number;
}

interface PaymentDetailsReadOnlyProps {
  state: OrderState;
}

const PaymentDetailsReadOnly: FC<PaymentDetailsReadOnlyProps> = ({ state }) => {
  /* Order details array */
  const details = [
    { label: "Subtotal", value: state.subtotal },
    { label: "Additional Costs", value: state.additionalCosts },
    { label: "Discount (15%)", value: state.discount },
  ];

  return (
    <Box className={styles.paymentDetailsReadOnly}>
      {details.map(({ label, value }) => (
        <Stack key={label} className={styles.paymentDetailsLine}>
          <Typography className={styles._}>{label}</Typography>
          <Typography className={styles.price}>
            {label === "Discount"
              ? `-$${value.toFixed(2)}`
              : `$${value.toFixed(2)}`}
          </Typography>
        </Stack>
      ))}
      <Stack className={styles.totalAmount}>
        <Typography className={styles._}>Total</Typography>
        <Typography className={styles.price}>
          {`$${state?.total.toFixed(2)}`}
        </Typography>
      </Stack>
    </Box>
  );
};

export default PaymentDetailsReadOnly;

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import styles from "../../styles/checkout.module.scss";
import { FC } from "react";

interface PaymentDetailsReadOnlyProps {
  state: any;
}

const PaymentDetailsReadOnly: FC<PaymentDetailsReadOnlyProps> = ({ state }) => {
  /* Calculate additional costs and discount */
  const subtotal = state?.subtotal;
  const additionalCosts = state?.additionalCosts;
  const discount = state?.discount;
  const total = state?.total;

  /* Order details array */
  const details = [
    { label: "Subtotal", value: subtotal },
    { label: "Additional Costs", value: additionalCosts },
    { label: "Discount (15%)", value: discount },
    { label: "Total", value: total },
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
    </Box>
  );
};

export default PaymentDetailsReadOnly;

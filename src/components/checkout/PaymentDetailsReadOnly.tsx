import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import styles from "../../styles/checkout.module.scss";
import { FC } from "react";

interface PaymentDetailsReadOnly {
  subtotal: number;
}

const PaymentDetailsReadOnly: FC<PaymentDetailsReadOnly> = ({ subtotal }) => {
  const additionalCosts = 1.99;
  const discount = 0.15 * subtotal;
  const total = subtotal + additionalCosts - discount;

  const details = [
    { label: "Subtotal", value: subtotal },
    { label: "Additional Costs", value: additionalCosts },
    { label: "Discount (15%)", value: discount },
  ];

  return (
    <Box className={styles.paymentDetailsReadOnly}>
      {details.map(({ label, value }) => (
        <Stack key={label} className={styles.paymentDetailsLine}>
          <Typography className={styles._}>{label}</Typography>
          <Typography className={styles.price}>
            {label === "Discount"
              ? `-$${Number(value).toFixed(2)}`
              : `$${Number(value).toFixed(2)}`}
          </Typography>
        </Stack>
      ))}

      <Stack className={styles.totalAmount}>
        <Typography className={styles._}>Total</Typography>
        <Typography className={styles.price}>
          ${Number(total).toFixed(2)}
        </Typography>
      </Stack>
    </Box>
  );
};

export default PaymentDetailsReadOnly;

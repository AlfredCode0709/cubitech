import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import commonStyles from "../../styles/common.module.scss";
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
    <Box className={commonStyles.paymentDetails}>
      {details.map(({ label, value }) => (
        <Stack key={label} className={commonStyles.paymentDetailsLine}>
          <Typography>{label}</Typography>
          <Typography className={commonStyles.price}>
            {label === "Discount"
              ? `-$${value.toFixed(2)}`
              : `$${value.toFixed(2)}`}
          </Typography>
        </Stack>
      ))}

      <Stack className={commonStyles.totalAmount}>
        <Typography className={commonStyles._}>Total</Typography>
        <Typography className={commonStyles.price}>
          ${total.toFixed(2)}
        </Typography>
      </Stack>
    </Box>
  );
};

export default PaymentDetailsReadOnly;

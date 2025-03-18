import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import styles from "@/styles/cart.module.scss";
import { CubiFoodItem, CubiMartItem } from "@/contexts/CartContext";
import { FC } from "react";

interface PaymentDetailsProps {
  items: CubiFoodItem[] | CubiMartItem[];
}

const PaymentDetails: FC<PaymentDetailsProps> = ({ items }) => {
  const subtotal = items.reduce(
    (sum: number, item: CubiFoodItem | CubiMartItem) => sum + item.price * item.quantity,
    0
  );

  const additionalCosts = 1.99;
  const discount = 0.15 * (subtotal + additionalCosts);
  const total = subtotal + additionalCosts - discount;

  const details = [
    { label: "Subtotal", value: subtotal },
    { label: "Additional Costs", value: additionalCosts },
    { label: "Discount (15%)", value: discount },
  ];

  return (
    <Box className={styles.paymentDetails}>
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
        <Typography className={styles.price}>${total.toFixed(2)}</Typography>
      </Stack>
    </Box>
  );
};

export default PaymentDetails;

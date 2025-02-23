import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CartListItemReadOnly from "../cubifood/CartListItemReadOnly";
import ConsumeByOption from "./ConsumeByOption";
import styles from "../../styles/checkout.module.scss";
import TimeSlot from "./TimeSlot";
import { FC, MouseEvent, useState } from "react";
import PaymentMethodOption from "./PaymentMethodOption";

interface CheckoutFormProps {
  items: any[];
}

const CheckoutForm: FC<CheckoutFormProps> = ({ items }) => {
  const [consumeBy, setConsumeBy] = useState("dineIn");

  const handleConsumeBy = (
    _: MouseEvent<HTMLElement>,
    newConsumeBy: string | null
  ) => {
    if (newConsumeBy) setConsumeBy(newConsumeBy);
  };

  console.log(items);

  return (
    <Box className={styles.checkoutForm}>
      <Typography className={styles.title}>Checkout</Typography>

      <ConsumeByOption
        consumeBy={consumeBy}
        handleConsumeBy={handleConsumeBy}
      />

      {consumeBy === "dineIn" ? (
        <Typography color={"textSecondary"} marginBottom={"2.5%"}>
          Collect in 5 mins
        </Typography>
      ) : (
        <TimeSlot />
      )}

      {items.map((item) => (
        <CartListItemReadOnly key={item.cartId} item={item} />
      ))}

      <PaymentMethodOption />
    </Box>
  );
};

export default CheckoutForm;

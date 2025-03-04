import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import CartListItemReadOnly from "./CartListItemReadOnly";
import ConsumeByOption from "./ConsumeByOption";
import PaymentMethodOption from "./PaymentMethodOption";
import TimeSlot from "./TimeSlot";
import styles from "../../styles/checkout.module.scss";
import { useForm } from "react-hook-form";
import { FC, useState } from "react";

interface CheckoutFormProps {
  items: any[];
}

interface CheckoutFormValues {
  cartItems: any[];
  consumeBy: string;
  collectBy: string;
  paymentMethod: string;
}

const CheckoutForm: FC<CheckoutFormProps> = ({ items }) => {
  const { handleSubmit, watch, control, setValue } =
    useForm<CheckoutFormValues>({
      defaultValues: {
        cartItems: items,
        consumeBy: "dineIn",
        collectBy: "<15minsSelfCollection",
        paymentMethod: "debitCreditCard",
      },
    });

  const consumeBy = watch("consumeBy");
  const [loading, setLoading] = useState(false);

  const handleConsumeByChange = (newValue: string) => {
    setValue("consumeBy", newValue);
    setValue(
      "collectBy",
      newValue === "dineIn" ? "<15minsSelfCollection" : "7amTo10am",
    );
  };

  const handleTimeSlotChange = (newTimeSlot: string) => {
    setValue("collectBy", newTimeSlot);
  };

  const onSubmit = (data: CheckoutFormValues) => {
    console.log("Form Data:", data);
  };

  return (
    <Box
      component="form"
      className={styles.checkoutForm}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography className={styles.title}>Checkout</Typography>

      <ConsumeByOption
        control={control}
        name="consumeBy"
        onChange={handleConsumeByChange}
      />

      {consumeBy === "dineIn" ? (
        <Typography color="textSecondary" marginBottom="2.5%">
          Collect in 15 mins
        </Typography>
      ) : (
        <TimeSlot
          control={control}
          name="collectBy"
          onChange={handleTimeSlotChange}
        />
      )}

      {items.map((item) => (
        <CartListItemReadOnly key={item.cartId} item={item} />
      ))}

      <PaymentMethodOption control={control} name="paymentMethod" />

      <Button
        color="primary"
        variant="contained"
        size="large"
        startIcon={<ShoppingCartCheckoutIcon />}
        type="submit"
        sx={{ marginTop: "5%" }}
        fullWidth
      >
        Proceed to Checkout
      </Button>
    </Box>
  );
};

export default CheckoutForm;

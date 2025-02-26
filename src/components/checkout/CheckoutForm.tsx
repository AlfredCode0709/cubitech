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
import { FC, useMemo, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
);

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

  const onSubmit = async (data: CheckoutFormValues) => {
    console.log("Form Data:", data);

    handleCheckout();
  };

  const [loading, setLoading] = useState(false);

  // Get the base URL dynamically on the client-side
  const baseUrl = useMemo(() => {
    if (typeof window !== "undefined") {
      return window.location.origin;
    }
    return "";
  }, []);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: 1000,
          currency: "sgd",
        }),
      });

      const data = await response.json();
      if (data.sessionId) {
        const stripe = await stripePromise;
        await stripe?.redirectToCheckout({ sessionId: data.sessionId });
      } else {
        console.error("Failed to create session");
      }
    } catch (error) {
      console.error("Checkout error:", error);
    }
    setLoading(false);
  };

  return (
    <Box
      component={"form"}
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
        color={"primary"}
        variant={"contained"}
        size={"large"}
        startIcon={<ShoppingCartCheckoutIcon />}
        type={"submit"}
        sx={{
          marginTop: "5%",
        }}
        disabled={loading}
        fullWidth
      >
        {loading ? "Pending Checkout" : "Proceed to Checkout"}
      </Button>
    </Box>
  );
};

export default CheckoutForm;

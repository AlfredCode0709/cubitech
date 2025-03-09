import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import CartListItemReadOnly from "./CartListItemReadOnly";
import ConsumeByOption from "./ConsumeByOption";
import DeliverByOption from "./DeliverByOption";
import PaymentMethodOption from "./PaymentMethodOption";
import TimeSlot from "./TimeSlot";
import styles from "../../styles/checkout.module.scss";
import { handleCheckout } from "./HandleCheckout";
import { useForm } from "react-hook-form";
import { useOrder } from "@/contexts/OrderContext";
import { useRouter } from "next/router";
import { FC, Fragment, useState } from "react";

interface CheckoutFormProps {
  state: any;
}

interface CheckoutFormValues {
  cartItems: any[];
  consumeBy: string;
  collectBy: string;
  deliverBy: string;
  paymentMethod: string;
  subtotal: number;
  additionalCosts: number;
  discount: number;
  total: number;
  isCubiMart: boolean;
}

const CheckoutForm: FC<CheckoutFormProps> = ({ state }) => {
  const { dispatch } = useOrder();

  const cartItems = state?.orderItems;
  const isCubiMart = state?.isCubiMart;
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { handleSubmit, watch, control, setValue } =
    useForm<CheckoutFormValues>({
      defaultValues: {
        cartItems: cartItems,
        consumeBy: "dineIn",
        collectBy: "<15minsSelfCollection",
        deliverBy: "doorStepDelivery",
        paymentMethod: "debitCreditCard",
        subtotal: state?.subtotal,
        additionalCosts: state?.additionalCosts,
        discount: state?.discount,
        total: state?.total,
        isCubiMart: isCubiMart
      },
    });

  const consumeBy = watch("consumeBy");

  const handleConsumeByChange = (newValue: string) => {
    setValue("consumeBy", newValue);
    setValue(
      "collectBy",
      newValue === "dineIn" ? "<15minsSelfCollection" : "7amTo10am"
    );
  };

  const handleDeliveryChange = (newValue: string) => {
    setValue("deliverBy", newValue);
  };

  const handleTimeSlotChange = (newTimeSlot: string) => {
    setValue("collectBy", newTimeSlot);
  };

  const onSubmit = async (data: CheckoutFormValues) => { 
    setLoading(true);
    try {
      const response = await handleCheckout({
        cartItems: data.cartItems,
        currency: "sgd",
        paymentMethod: data.paymentMethod === "debitCreditCard" ? "card" : "paynow",
        subtotal: data.subtotal,
        additionalCosts: data.additionalCosts,
        discount: data.discount,
        total: data.total,
        isCubiMart: isCubiMart
      });

      if (response.sessionId) {
        dispatch({ type: "CLEAR_ORDER" }); // Clear order after successful checkout
        router.push(response.success_url);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component={"form"}
      className={styles.checkoutForm}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography className={styles.title}>Checkout</Typography>

      {
        isCubiMart === true && 
        <Fragment>
          <DeliverByOption 
            control={control}
            name="deliverBy"
            onChange={handleDeliveryChange}
          />
        </Fragment>
      }

      {isCubiMart === false && (
        <Fragment>
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
        </Fragment>
      )}

      {cartItems.map((item: any) => (
        <CartListItemReadOnly
          key={item.cartId}
          item={item}
          isCubiMart={isCubiMart}
        />
      ))}

      <PaymentMethodOption control={control} name="paymentMethod" />

      <Button
        color={"primary"}
        variant={"contained"}
        size={"large"}
        startIcon={<ShoppingCartCheckoutIcon />}
        type={"submit"}
        sx={{ marginTop: "5%" }}
        disabled={loading}
        fullWidth
      >
        {loading ? "Processing..." : "Proceed to Checkout"}
      </Button>
    </Box>
  );
};

export default CheckoutForm;

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import CartListItemReadOnly from "./CartListItemReadOnly";
import ConsumeByOption from "./ConsumeByOption";
import DeliverByOption from "./DeliverByOption";
import PaymentMethodOption from "./PaymentMethodOption";
import TimeSlot from "./TimeSlot";
import omit from "lodash.omit";
import styles from "@/styles/checkout.module.scss";
import { handleCheckout } from "./HandleCheckout";
import { useForm } from "react-hook-form";
import { useOrder } from "@/contexts/OrderContext";
import { useRouter } from "next/router";
import { FC, Fragment, useEffect, useState } from "react";

interface CheckoutFormProps {
  isCubiMart: boolean;
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

const CheckoutForm: FC<CheckoutFormProps> = ({ isCubiMart, state }) => {
  const router = useRouter();
  const { dispatch } = useOrder();
  const [loading, setLoading] = useState(false);

  // Extract order data
  const orderData = isCubiMart ? state?.cubiMart : state?.cubiFood;
  const {
    orderItems = [],
    subtotal = 0,
    additionalCosts = 0,
    discount = 0,
    total = 0,
  } = orderData || {};

  const { handleSubmit, watch, control, setValue, reset } =
    useForm<CheckoutFormValues>({
      defaultValues: {
        cartItems: orderItems,
        consumeBy: "dineIn",
        collectBy: "<15minsSelfCollection",
        deliverBy: "doorStepDelivery",
        paymentMethod: "card",
        subtotal,
        additionalCosts,
        discount,
        total,
        isCubiMart,
      },
    });

  // Reset form when state or isCubiMart changes
  useEffect(() => {
    reset({
      cartItems: orderItems,
      consumeBy: "dineIn",
      collectBy: "<15minsSelfCollection",
      deliverBy: "doorStepDelivery",
      paymentMethod: "card",
      subtotal,
      additionalCosts,
      discount,
      total,
      isCubiMart,
    });
  }, [isCubiMart, state, reset]);

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

    const refinedData = isCubiMart
      ? omit(data, ["consumeBy", "collectBy"]) // Remove for CubiMart
      : omit(data, ["deliverBy"]); // Remove for CubiFood

    console.log(refinedData);

    try {
      const response = await handleCheckout({
        cartItems: refinedData.cartItems,
        currency: "sgd",
        paymentMethod: refinedData.paymentMethod,
        subtotal: refinedData.subtotal,
        additionalCosts: refinedData.additionalCosts,
        discount: refinedData.discount,
        total: refinedData.total,
        isCubiMart: isCubiMart,
      });

      if (response.sessionId) {
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

      {isCubiMart === true ? (
        <Fragment>
          <DeliverByOption
            control={control}
            name="deliverBy"
            onChange={handleDeliveryChange}
          />
        </Fragment>
      ) : (
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

      {orderItems.map((item: any) => (
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

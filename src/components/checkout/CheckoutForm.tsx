import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ConsumeByOption from "./ConsumeByOption";
import DeliverByOption from "./DeliverByOption";
import PaymentMethodOption from "./PaymentMethodOption";
import TimeSlot from "./TimeSlot";
import styles from "@/styles/checkout.module.scss";
import { CubiFoodItem, CubiMartItem, useOrder } from "@/contexts/OrderContext";
import { useForm } from "react-hook-form";
import { FC, Fragment, useMemo } from "react";
import Stack from "@mui/material/Stack";
import CartListGroupItemReadOnly from "./CartListGroupItemReadOnly/CartListGroupItemReadOnly";
import CartListItemReadOnly from "./CartListItemReadOnly";

interface CheckoutFormProps {
  isCubiMart: boolean;
}

export interface CheckoutFormValues {
  cartItems: CubiFoodItem | CubiMartItem[];
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

const CheckoutForm: FC<CheckoutFormProps> = ({ isCubiMart }) => {
  const { state, dispatch } = useOrder();

  const orderData = isCubiMart === true ? state?.cubiMart : state?.cubiFood;
  const { orderItems = [] } = orderData || {}; // Only destructure what's needed

  const groupedItems = useMemo(() => {
    return orderItems.reduce(
      (
        acc: Record<string, (CubiFoodItem | CubiMartItem)[]>,
        item: CubiFoodItem | CubiMartItem
      ) => {
        if (!acc[item.itemId]) {
          acc[item.itemId] = [];
        }
        acc[item.itemId].push(item);
        return acc;
      },
      {} as Record<string, (CubiFoodItem | CubiMartItem)[]>
    );
  }, [orderItems]);

  const { handleSubmit, control, setValue, reset } =
    useForm<CheckoutFormValues>({
      defaultValues: {
        cartItems: orderItems,
        consumeBy: "dineIn", // Default value
        collectBy: "<15minsSelfCollection", // Default value
        deliverBy: "doorStepDelivery", // Default value
        paymentMethod: "card", // Default value
        subtotal: orderData.subtotal || 0, // Only use if needed
        additionalCosts: orderData.additionalCosts || 0, // Only use if needed
        discount: orderData.discount || 0, // Only use if needed
        total: orderData.total || 0, // Only use if needed
        isCubiMart,
      },
    });

  const handleDeliverByChange = (newDeliverBy: string) => {
    setValue("deliverBy", newDeliverBy);
  };

  const handleTimeSlotChange = (newTimeSlot: string) => {
    setValue("collectBy", newTimeSlot);
  };

  const consumeBy = control._getWatch("consumeBy");

  const onSubmit = async (data: CheckoutFormValues) => {
    // Use Object.entries to get both key and value at once
    const filteredData = Object.entries(data).reduce((acc, [key, value]) => {
      // Only add the valid keys based on isCubiMart
      if (isCubiMart && key !== "consumeBy" && key !== "collectBy") {
        acc[key as keyof CheckoutFormValues] = value;
      } else if (!isCubiMart && key !== "deliverBy") {
        acc[key as keyof CheckoutFormValues] = value;
      }
      return acc;
    }, {} as Record<keyof CheckoutFormValues, string | number | boolean>); // Replace `any` with specific types

    console.log(filteredData);
    dispatch({ type: "CLEAR_ORDER" });
  };

  const handleReset = () => {
    reset({
      cartItems: orderItems,
      consumeBy: "dineIn",
      collectBy: "<15minsSelfCollection",
      deliverBy: "doorStepDelivery",
      paymentMethod: "card",
      subtotal: orderData.subtotal || 0,
      additionalCosts: orderData.additionalCosts || 0,
      discount: orderData.discount || 0,
      total: orderData.total || 0,
      isCubiMart,
    });
  };

  const typedGroup = isCubiMart
    ? (groupedItems as Record<string, CubiMartItem[]>)
    : (groupedItems as Record<string, CubiFoodItem[]>);

  return (
    <Box
      component={"form"}
      className={styles.checkoutForm}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography className={styles.title}>Checkout</Typography>

      {isCubiMart ? (
        <Fragment>
          <DeliverByOption
            control={control}
            name="deliverBy"
            onChange={handleDeliverByChange}
          />
        </Fragment>
      ) : (
        <Fragment>
          <ConsumeByOption control={control} name="consumeBy" />
          {consumeBy === "dineIn" ? (
            <Typography
              color="textSecondary"
              marginTop={"0.75%"}
              marginBottom={"5%"}
            >
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

      {Object.values(typedGroup).map((group, index) => {
        const groupTyped = isCubiMart
          ? (group as CubiMartItem[])
          : (group as CubiFoodItem[]);

        return groupTyped.length > 1 ? (
          <CartListGroupItemReadOnly
            key={index}
            isCubiMart={isCubiMart}
            items={(isCubiMart
              ? (groupTyped as CubiMartItem[])
              : (groupTyped as CubiFoodItem[])
            ).map((item) => ({
              ...item,
              customisations:
                "customisations" in item ? item.customisations ?? [] : [], // Ensure customisations is always an array
            }))}
          />
        ) : (
          <CartListItemReadOnly
            key={index}
            isCubiMart={isCubiMart}
            item={group[0]}
            isFirst={index === 0}
          />
        );
      })}

      <PaymentMethodOption control={control} name="paymentMethod" />

      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          marginTop: "2.5%",
          gap: "16px",
        }}
      >
        <Button
          color={"primary"}
          variant={"contained"}
          size={"large"}
          startIcon={<RestartAltIcon />}
          onClick={handleReset}
          fullWidth
        >
          Reset
        </Button>
        <Button
          color={"primary"}
          variant={"contained"}
          size={"large"}
          startIcon={<ShoppingCartCheckoutIcon />}
          type={"submit"}
          fullWidth
        >
          Proceed to Checkout
        </Button>
      </Stack>
    </Box>
  );
};

export default CheckoutForm;

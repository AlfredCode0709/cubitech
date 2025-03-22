import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import CartListGroupItemReadOnly from "./CartListGroupItemReadOnly/CartListGroupItemReadOnly";
import CartListItemReadOnly from "./CartListItemReadOnly";
import ConsumeByOption from "./ConsumeByOption";
import DeliverByOption from "./DeliverByOption";
import PaymentMethodOption from "./PaymentMethodOption";
import TimeSlot from "./TimeSlot";
import styles from "@/styles/checkout.module.scss";
import { CubiFoodItem, CubiMartItem, useOrder } from "@/contexts/OrderContext";
import { useForm } from "react-hook-form";
import { FC, Fragment, useMemo } from "react";
import CheckoutActionButtons from "./CheckoutActionButtons";
import IconButton from "@mui/material/IconButton";
import { enqueueSnackbar } from "notistack";

interface CheckoutFormProps {
  isCubiMart: boolean;
  handleCancel: () => void;
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

const CheckoutForm: FC<CheckoutFormProps> = ({ isCubiMart, handleCancel }) => {
  const { state } = useOrder();

  const orderData = isCubiMart === true ? state?.cubiMart : state?.cubiFood;
  const { orderItems = [] } = orderData || {};

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

  const { handleSubmit, watch, control, setValue, reset } =
    useForm<CheckoutFormValues>({
      defaultValues: {
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
      },
    });

  const handleDeliverByChange = (newDeliverBy: string) => {
    setValue("deliverBy", newDeliverBy);
  };

  const handleTimeSlotChange = (newTimeSlot: string) => {
    setValue("collectBy", newTimeSlot);
  };

  const consumeBy = watch("consumeBy");

  const handleConsumeByChange = (newValue: string) => {
    setValue("consumeBy", newValue);
    setValue(
      "collectBy",
      newValue === "dineIn" ? "<15minsSelfCollection" : "7amTo10am"
    );
  };

  const onSubmit = async (data: CheckoutFormValues) => {
    const filteredData = Object.entries(data).reduce((acc, [key, value]) => {
      if (isCubiMart && key !== "consumeBy" && key !== "collectBy") {
        acc[key as keyof CheckoutFormValues] = value;
      } else if (!isCubiMart && key !== "deliverBy") {
        acc[key as keyof CheckoutFormValues] = value;
      }
      return acc;
    }, {} as Record<keyof CheckoutFormValues, string | number | boolean>);

    console.log(filteredData);

    enqueueSnackbar("Checkout done! This is a simulation!", {
      variant: "success",
    });
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
      <Stack
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        marginBottom={"5%"}
      >
        <Typography className={styles.title}>Checkout</Typography>

        <IconButton onClick={handleCancel} color={"error"}>
          <CloseIcon />
        </IconButton>
      </Stack>

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
          <ConsumeByOption
            control={control}
            name="consumeBy"
            onChange={handleConsumeByChange}
          />
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

      <CheckoutActionButtons handleReset={handleReset} />
    </Box>
  );
};

export default CheckoutForm;

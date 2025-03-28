import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ActionButtons from "./ActionButtons";
import CartListGroupItemReadOnly from "../CartListGroupItemReadOnly/CartListGroupItemReadOnly";
import CartListItemReadOnly from "../CartListItemReadOnly";
import CheckoutFormHeader from "./CheckoutFormHeader";
import ConsumeBySelector from "./ConsumeBySelector";
import DeliveryMethodSelector from "./DeliveryMethodSelector";
import PaymentMethodSelector from "./PaymentMethodSelector";
import TimeSlotSelector from "./TimeSlotSelector";
import styles from "@/styles/checkout.module.scss";
import { CubiFoodItem, CubiMartItem, useOrder } from "@/contexts/OrderContext";
import { enqueueSnackbar } from "notistack";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/router";
import { FC, Fragment, useMemo } from "react";

interface CheckoutFormProps {
  isCubiMart: boolean;
  handleCancel: () => void;
}

export interface CheckoutFormValues {
  cartItems: CubiFoodItem | CubiMartItem[];
  consumeBy: string;
  collectBy: string;
  deliveryMethod: string;
  paymentMethod: string;
  subtotal: number;
  additionalCosts: number;
  discount: number;
  total: number;
  isCubiMart: boolean;
}

const CheckoutForm: FC<CheckoutFormProps> = ({ isCubiMart, handleCancel }) => {
  const { state, dispatch } = useOrder();
  const router = useRouter();

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

  const typedGroup = isCubiMart
    ? (groupedItems as Record<string, CubiMartItem[]>)
    : (groupedItems as Record<string, CubiFoodItem[]>);

  const {
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    defaultValues: {
      cartItems: orderItems,
      consumeBy: "",
      collectBy: "",
      deliveryMethod: "",
      paymentMethod: "",
      subtotal: orderData.subtotal || 0,
      additionalCosts: orderData.additionalCosts || 0,
      discount: orderData.discount || 0,
      total: orderData.total || 0,
      isCubiMart,
    },
  });

  const onSubmit = (data: CheckoutFormValues) => {
    const filteredData = Object.entries(data).reduce((acc, [key, value]) => {
      if (isCubiMart && key !== "consumeBy" && key !== "collectBy") {
        acc[key as keyof CheckoutFormValues] = value;
      } else if (!isCubiMart && key !== "deliveryMethod") {
        acc[key as keyof CheckoutFormValues] = value;
      }
      return acc;
    }, {} as Record<keyof CheckoutFormValues, string | number | boolean>);

    if (!isCubiMart && filteredData.collectBy === "") {
      filteredData.collectBy = "<15minsSelfCollection";
    }

    console.log(filteredData);

    dispatch({ type: "CLEAR_ORDER", payload: { isCubiMart } });

    enqueueSnackbar("Checkout done! This is a simulation!", {
      variant: "success",
    });

    router.push("/checkout/success");
  };

  return (
    <Box
      className={styles.checkoutForm}
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <CheckoutFormHeader handleCancel={handleCancel} />

      {isCubiMart ? (
        <DeliveryMethodSelector control={control} errors={errors} />
      ) : (
        <Fragment>
          <ConsumeBySelector control={control} errors={errors} />

          <Box className={styles.consumeByData}>
            <Controller
              name="consumeBy"
              control={control}
              render={({ field }) =>
                field.value === "" ? (
                  <></>
                ) : field.value === "dineIn" ? (
                  <Typography className={styles.consumeByText}>
                    Collect in 15 mins
                  </Typography>
                ) : (
                  <TimeSlotSelector control={control} errors={errors} />
                )
              }
            />
          </Box>
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
                "customisations" in item ? item.customisations ?? [] : [],
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

      <PaymentMethodSelector control={control} errors={errors} />

      <ActionButtons reset={reset} watch={watch} />
    </Box>
  );
};

export default CheckoutForm;

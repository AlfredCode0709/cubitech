import Box from "@mui/material/Box";
import CheckoutFormHeader from "./CheckoutFormHeader";
import ConsumeBySelector from "./ConsumeBySelector";
import ActionButtons from "./ActionButtons";
import styles from "@/styles/checkout.module.scss";
import { CubiFoodItem, CubiMartItem, useOrder } from "@/contexts/OrderContext";
import { useForm } from "react-hook-form";
import { FC } from "react";
import Typography from "@mui/material/Typography";
import TimeSlotSelector from "./TimeSlotSelector";

interface CheckoutFormProps {
  isCubiMart: boolean;
  handleCancel: () => void;
}

export interface CheckoutFormValues {
  consumeBy: string;
  collectBy: string;
  isCubiMart: boolean;
}

const CheckoutForm: FC<CheckoutFormProps> = ({ isCubiMart, handleCancel }) => {
  const {
    handleSubmit,
    watch,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    defaultValues: {
      consumeBy: "dineIn",
      collectBy: "<15minsSelfCollection",
      isCubiMart,
    },
  });

  const onSubmit = (data: CheckoutFormValues) => {
    console.log(data);
  };

  const consumeBy = watch("consumeBy");

  return (
    <Box
      component={"form"}
      className={styles.checkoutForm}
      onSubmit={handleSubmit(onSubmit)}
    >
      <CheckoutFormHeader handleCancel={handleCancel} />

      <ConsumeBySelector control={control} errors={errors} />

      {consumeBy === "dineIn" ? (
        <Typography className={styles.dineInText}>
          Collect in 15 mins
        </Typography>
      ) : (
        <TimeSlotSelector control={control} name="collectBy" errors={errors} />
      )}

      <ActionButtons reset={reset} />
    </Box>
  );
};

export default CheckoutForm;

import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import styles from "@/styles/checkout.module.scss";
import { CheckoutFormValues } from "./CheckoutForm";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { paymentMethods } from "./paymentmethods";
import { FC } from "react";

interface PaymentMethodSelectorProps {
  control: Control<CheckoutFormValues>;
  errors: FieldErrors<CheckoutFormValues>;
}

const PaymentMethodSelector: FC<PaymentMethodSelectorProps> = ({
  control,
  errors,
}) => {
  return (
    <FormControl className={styles.paymentMethodSelectorControl} fullWidth>
      <FormLabel>Payment Method</FormLabel>
      <Controller
        name={"paymentMethod"}
        control={control}
        rules={{ required: "Please select a payment method" }}
        render={({ field }) => (
          <RadioGroup row {...field}>
            {paymentMethods.map((opt) => (
              <FormControlLabel
                key={opt.value}
                value={opt.value}
                control={<Radio />}
                label={opt.label}
              />
            ))}
          </RadioGroup>
        )}
      />
      {errors.paymentMethod?.message && (
        <Typography className={styles.paymentMethodSelectorError}>
          {String(errors.paymentMethod.message)}
        </Typography>
      )}
    </FormControl>
  );
};

export default PaymentMethodSelector;

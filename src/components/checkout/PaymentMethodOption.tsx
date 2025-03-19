import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { Control, Controller } from "react-hook-form";
import { CheckoutFormValues } from "./CheckoutForm";
import { paymentMethods } from "./paymentmethods";
import { FC } from "react";

interface PaymentMethodOptionsProps {
  control: Control<CheckoutFormValues>;
  name: keyof CheckoutFormValues;
}

const PaymentMethodOption: FC<PaymentMethodOptionsProps> = ({
  control,
  name,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl sx={{ marginY: "2.5%" }}>
          <FormLabel sx={{ marginBottom: '1.25%' }}>Payment Method</FormLabel>
          <RadioGroup {...field}>
            {paymentMethods.map((method) => (
              <FormControlLabel
                key={method.value}
                value={method.value}
                control={<Radio />}
                label={method.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    />
  );
};

export default PaymentMethodOption;

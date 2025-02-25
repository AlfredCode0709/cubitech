import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { paymentMethods } from "./paymentmethods";
import { Controller } from "react-hook-form";
import { FC } from "react";

interface PaymentMethodOptionsProps {
  control: any;
  name: string;
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
        <FormControl sx={{ marginTop: "5%" }}>
          <FormLabel>Payment Method</FormLabel>
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

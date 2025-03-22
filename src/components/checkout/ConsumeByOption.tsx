import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { consumeOptions } from "./consumeOptions";
import { Control, Controller } from "react-hook-form";
import { CheckoutFormValues } from "./CheckoutForm";
import { FC } from "react";

interface ConsumeByOptionProps {
  control: Control<CheckoutFormValues>;
  name: keyof CheckoutFormValues;
  onChange: (newValue: string) => void;
}

const ConsumeByOption: FC<ConsumeByOptionProps> = ({ control, name, onChange }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl sx={{ marginY: "2.5%" }}>
          <FormLabel sx={{ marginBottom: "1.25%" }}>Consume By</FormLabel>
          <RadioGroup {...field} onChange={(_, newValue) => newValue && onChange(newValue)}>
            {consumeOptions.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    />
  );
};

export default ConsumeByOption;

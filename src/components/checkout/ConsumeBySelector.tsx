import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import styles from "@/styles/checkout.module.scss";
import { consumeOptions } from "./consumeOptions";
import { CheckoutFormValues } from "./CheckoutForm";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { FC } from "react";

interface ConsumeBySelectorProps {
  control: Control<CheckoutFormValues>;
  errors: FieldErrors<CheckoutFormValues>;
}

const ConsumeBySelector: FC<ConsumeBySelectorProps> = ({ control, errors }) => {
  return (
    <FormControl className={styles.consumeBySelectorControl} fullWidth>
      <FormLabel>Consume By</FormLabel>
      <Controller
        name={"consumeBy"}
        control={control}
        rules={{ required: "Please select an option" }}
        render={({ field }) => (
          <RadioGroup row {...field}>
            {consumeOptions.map((opt) => (
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
      {errors.consumeBy?.message && (
        <Typography className={styles.consumeBySelectorError}>
          {String(errors.consumeBy.message)}
        </Typography>
      )}
    </FormControl>
  );
};

export default ConsumeBySelector;

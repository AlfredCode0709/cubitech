import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import styles from "@/styles/checkout.module.scss";
import { CheckoutFormValues } from "./CheckoutForm";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { deliverOptions } from "./deliverByOptions";
import { FC, Fragment, useState } from "react";

interface DeliveryMethodSelectorProps {
  control: Control<CheckoutFormValues>;
  errors: FieldErrors<CheckoutFormValues>;
}

const DeliveryMethodSelector: FC<DeliveryMethodSelectorProps> = ({
  control,
  errors,
}) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  return (
    <FormControl className={styles.deliveryMethodSelectorControl} fullWidth>
      <Controller
        name={"deliveryMethod"}
        control={control}
        rules={{ required: "Please select a delivery method" }}
        render={({ field, formState: { isSubmitted } }) => (
          <Fragment>
            <Stack className={styles.deliveryMethodSelectorHeader}>
              <FormLabel>
                {isConfirmed
                  ? `Delivery Method: ${
                      deliverOptions.find((opt) => opt.value === field.value)
                        ?.label || "None"
                    }`
                  : "Select Delivery Method"}
              </FormLabel>
              {isConfirmed ? (
                <Button
                  variant={"text"}
                  onClick={() => {
                    field.onChange("");
                    setIsConfirmed(false);
                  }}
                  sx={{
                    padding: 0,
                  }}
                >
                  Edit
                </Button>
              ) : (
                <Button
                  variant={"text"}
                  onClick={() => {
                    if (field.value) {
                      setIsConfirmed(true);
                    }
                  }}
                  sx={{
                    padding: 0,
                  }}
                  disabled={!field.value}
                >
                  Confirm
                </Button>
              )}
            </Stack>

            {!isConfirmed && (
              <RadioGroup
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
              >
                {deliverOptions.map((opt) => (
                  <FormControlLabel
                    key={opt.value}
                    value={opt.value}
                    control={<Radio />}
                    label={opt.label}
                  />
                ))}
              </RadioGroup>
            )}

            {/* Displaying the error message */}
            {(isSubmitted || !isConfirmed) && errors.deliveryMethod?.message && (
              <Typography className={styles.deliveryMethodSelectorError}>
                {errors.deliveryMethod.message}
              </Typography>
            )}
          </Fragment>
        )}
      />
    </FormControl>
  );
};

export default DeliveryMethodSelector;

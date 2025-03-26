import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import styles from "@/styles/checkout.module.scss";
import { CheckoutFormValues } from "./CheckoutForm";
import { Controller, Control, FieldErrors } from "react-hook-form";
import { timeSlots } from "./timeslots";
import { FC, Fragment, useState } from "react";

interface TimeSlotSelectorProps {
  control: Control<CheckoutFormValues>;
  errors: FieldErrors<CheckoutFormValues>;
}

const TimeSlotSelector: FC<TimeSlotSelectorProps> = ({ control, errors }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  return (
    <FormControl className={styles.timeSlotSelectorControl} fullWidth>
      <Controller
        name="collectBy"
        control={control}
        rules={{ required: "Please select a time slot" }}
        render={({ field, formState: { isSubmitted } }) => (
          <Fragment>
            <Stack className={styles.timeSlotSelectorHeader}>
              <FormLabel>
                {isConfirmed
                  ? `Time Slot: ${timeSlots.find((slot) => slot.value === field.value)?.label || "None"}`
                  : "Select a Time Slot"}
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
                {timeSlots.map((slot) => (
                  <FormControlLabel
                    key={slot.value}
                    value={slot.value}
                    control={<Radio />}
                    label={slot.label}
                  />
                ))}
              </RadioGroup>
            )}

            {/* Displaying the error message */}
            {(isSubmitted || !isConfirmed) && errors.collectBy?.message && (
              <Typography className={styles.timeSlotSelectorError}>
                {errors.collectBy.message}
              </Typography>
            )}
          </Fragment>
        )}
      />
    </FormControl>
  );
};

export default TimeSlotSelector;

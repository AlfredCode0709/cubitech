import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FormHelperText from "@mui/material/FormHelperText";
import styles from "@/styles/checkout.module.scss";
import { CheckoutFormValues } from "./CheckoutForm";
import { Controller, Control, FieldErrors } from "react-hook-form";
import { timeSlots } from "./timeslots";
import { FC, useState } from "react";

interface TimeSlotSelectorProps {
  control: Control<CheckoutFormValues>;
  name: keyof CheckoutFormValues;
  errors: FieldErrors<CheckoutFormValues>;
}

const TimeSlotSelector: FC<TimeSlotSelectorProps> = ({
  control,
  name,
  errors,
}) => {
  const [confirmed, setConfirmed] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: "Please select a time slot" }} // Validation added here
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        const selectedTimeSlot = timeSlots.find((slot) => slot.value === value);
        const handleConfirm = () => {
          if (value) {
            setConfirmed(true);
            setSelectedLabel(selectedTimeSlot ? selectedTimeSlot.label : null);
          }
        };

        const handleEdit = () => setConfirmed(false);

        return (
          <FormControl
            className={styles.timeSlotSelectorControl}
            fullWidth
            error={!!error} // Ensures error is detected
          >
            <Stack className={styles.timeSlotSelectorHeader}>
              <FormLabel>
                {confirmed ? `Time Slot: ${selectedLabel}` : "Time Slot"}
              </FormLabel>
              {confirmed ? (
                <Button variant="text" color="primary" onClick={handleEdit}>
                  Edit
                </Button>
              ) : (
                <Button
                  variant="text"
                  color="primary"
                  disabled={!value}
                  onClick={handleConfirm}
                >
                  Confirm
                </Button>
              )}
            </Stack>

            {!confirmed && (
              <>
                <RadioGroup
                  value={value}
                  onChange={(e) => onChange(e.target.value)}
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
                {error && <FormHelperText>{error.message}</FormHelperText>}
              </>
            )}
          </FormControl>
        );
      }}
    />
  );
};

export default TimeSlotSelector;

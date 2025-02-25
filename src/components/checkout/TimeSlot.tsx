import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Stack from "@mui/material/Stack";
import { timeSlots } from "./timeslots";
import { Controller } from "react-hook-form";
import { FC, useState } from "react";

interface TimeSlotProps {
  control: any;
  name: string;
  onChange: (newValue: string) => void;
}

const TimeSlot: FC<TimeSlotProps> = ({ control, name, onChange }) => {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);

  const handleSelect = (newValue: string) => {
    setSelectedSlot(newValue);
    const selectedTimeSlot = timeSlots.find((slot) => slot.value === newValue);
    setSelectedLabel(selectedTimeSlot ? selectedTimeSlot.label : null);
  };

  const handleConfirm = () => {
    if (selectedSlot) {
      onChange(selectedSlot);
      setConfirmed(true);
    }
  };

  const handleEdit = () => {
    setConfirmed(false);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl sx={{ marginBottom: "5%" }}>
          <Stack
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <FormLabel>Time Slot: {confirmed && `${selectedLabel}`}</FormLabel>
            {confirmed ? (
              <Button variant="text" color="primary" onClick={handleEdit}>
                Edit
              </Button>
            ) : (
              <Button
                variant="text"
                color="primary"
                disabled={!selectedSlot}
                onClick={handleConfirm}
              >
                Confirm
              </Button>
            )}
          </Stack>
          {!confirmed && (
            <Controller
              name={name}
              control={control}
              render={({ field }) => (
                <RadioGroup
                  value={selectedSlot || field.value}
                  onChange={(e) => handleSelect(e.target.value)}
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
            />
          )}
        </FormControl>
      )}
    />
  );
};

export default TimeSlot;

import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Stack from "@mui/material/Stack";
import { Control, Controller } from "react-hook-form";
import { CheckoutFormValues } from "./CheckoutForm";
import { deliverOptions } from "./deliverByOptions";
import { FC, useState } from "react";

interface DeliverByOptionProps {
  control: Control<CheckoutFormValues>;
  name: keyof CheckoutFormValues;
  onChange: (newValue: string) => void;
}

const DeliverByOption: FC<DeliverByOptionProps> = ({
  control,
  name,
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);

  const handleSelect = (newValue: string) => {
    setSelectedOption(newValue);
    const selectedOption = deliverOptions.find(
      (slot) => slot.value === newValue
    );
    setSelectedLabel(selectedOption ? selectedOption.label : null);
  };

  const handleConfirm = () => {
    if (selectedOption) {
      onChange(selectedOption);
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
      render={() => (
        <FormControl sx={{ marginBottom: "2.5%" }}>
          <Stack
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <FormLabel>
              {confirmed ? `Deliver By: ${selectedLabel}` : "Deliver By"}
            </FormLabel>
            {confirmed ? (
              <Button variant="text" color="primary" onClick={handleEdit}>
                Edit
              </Button>
            ) : (
              <Button
                variant="text"
                color="primary"
                disabled={!selectedOption}
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
                  value={selectedOption || field.value}
                  onChange={(e) => handleSelect(e.target.value)}
                >
                  {deliverOptions.map((delivery) => (
                    <FormControlLabel
                      key={delivery.value}
                      value={delivery.value}
                      control={<Radio />}
                      label={delivery.label}
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

export default DeliverByOption;

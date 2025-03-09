import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import { consumeOptions } from "./consumeOptions";
import { Controller } from "react-hook-form";
import { FC } from "react";

interface ConsumeByOptionProps {
  control: any;
  name: string;
  onChange: (newValue: string) => void;
}

const ConsumeByOption: FC<ConsumeByOptionProps> = ({
  control,
  name,
  onChange,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <ToggleButtonGroup
          value={field.value}
          exclusive
          onChange={(_, newValue) => newValue && onChange(newValue)}
          color="primary"
          sx={{ marginBottom: "5%" }}
        >
          {consumeOptions.map((option) => (
            <ToggleButton key={option.value} value={option.value}>
              {option.icon}
              <Typography fontWeight={500}>&nbsp;{option.label}</Typography>
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      )}
    />
  );
};

export default ConsumeByOption;

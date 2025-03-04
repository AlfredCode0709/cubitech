import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import TakeoutDiningIcon from "@mui/icons-material/TakeoutDining";
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
          sx={{ mb: "5%" }}
        >
          {[
            { value: "dineIn", icon: <LocalDiningIcon />, label: "Dine In" },
            {
              value: "takeaway",
              icon: <TakeoutDiningIcon />,
              label: "Takeaway",
            },
          ].map(({ value, icon, label }) => (
            <ToggleButton key={value} value={value}>
              {icon}
              <Typography fontWeight={500}>&nbsp;{label}</Typography>
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      )}
    />
  );
};

export default ConsumeByOption;

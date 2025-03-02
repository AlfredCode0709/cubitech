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
          sx={{ marginBottom: "5%" }}
        >
          <ToggleButton value="dineIn">
            <LocalDiningIcon />
            <Typography fontWeight={500}>&nbsp;Dine In</Typography>
          </ToggleButton>
          <ToggleButton value="takeaway">
            <TakeoutDiningIcon />
            <Typography fontWeight={500}>&nbsp;Takeaway</Typography>
          </ToggleButton>
        </ToggleButtonGroup>
      )}
    />
  );
};

export default ConsumeByOption;

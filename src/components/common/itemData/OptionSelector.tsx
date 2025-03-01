import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid2";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import { Controller } from "react-hook-form";
import { FC } from "react";

interface OptionSelectorProps {
  options: { value: string; label: string }[];
  control: any;
  errors: any;
}

const OptionSelector: FC<OptionSelectorProps> = ({
  options,
  control,
  errors,
}) => (
  <Grid size={12}>
    <FormControl
      sx={{
        "& .MuiFormLabel-root.Mui-focused": { color: "#08834e" },
        "& .MuiRadio-root": {
          "&.Mui-checked": { color: "#08834e" },
          "&:hover": { background: "#e7fef4" },
        },
      }}
    >
      <FormLabel>Options</FormLabel>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        <Controller
          name="option"
          control={control}
          rules={{ required: "Please select one option" }}
          render={({ field }) => (
            <RadioGroup row {...field}>
              {options.map((opt) => (
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
        {errors.option && (
          <Typography color="error">{errors.option.message}</Typography>
        )}
      </Box>
    </FormControl>
  </Grid>
);

export default OptionSelector;

import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
import { FC } from "react";

interface QuantitySelectorProps {
  control: any;
  errors: any;
}

const QuantitySelector: FC<QuantitySelectorProps> = ({ control, errors }) => (
  <Grid size={4}>
    <FormControl
      sx={{
        "& label.Mui-focused": { color: "#08834e" },
        "& .MuiOutlinedInput-root": {
          "&:hover fieldset": { borderColor: "#08834e" },
          "&.Mui-focused fieldset": {
            borderColor: "#08834e",
          },
        },
      }}
      fullWidth
    >
      <Controller
        name="quantity"
        control={control}
        rules={{
          required: "Quantity is required",
          min: { value: 1, message: "Minimum quantity is 1" },
          max: { value: 100, message: "Maximum quantity is 100" },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Quantity"
            type="number"
            variant="outlined"
            error={!!errors.quantity}
            helperText={errors.quantity?.message}
            inputProps={{ min: 1, max: 100 }}
            onChange={(e) => {
              let value = Number(e.target.value);
              if (value > 100) value = 100;
              if (value < 1) value = 1;
              field.onChange(value);
            }}
          />
        )}
      />
    </FormControl>
  </Grid>
);

export default QuantitySelector;

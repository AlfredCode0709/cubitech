import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import { FormValues } from "./ItemData";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { useRouter } from "next/router";
import { FC } from "react";

interface QuantitySelectorProps {
  control: Control<FormValues>;
  errors: FieldErrors<FormValues>;
}

const QuantitySelector: FC<QuantitySelectorProps> = ({ control, errors }) => {
  const router = useRouter();
  const isCubiFood = router.pathname.startsWith("/cubifood/item");
  const themeColor = isCubiFood ? "#08834e" : "primary";

  return (
    <Grid size={4}>
      <FormControl fullWidth>
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
              sx={{
                "& label.Mui-focused": { color: themeColor },
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": { borderColor: themeColor },
                  "&.Mui-focused fieldset": { borderColor: themeColor },
                },
              }}
            />
          )}
        />
      </FormControl>
    </Grid>
  );
};

export default QuantitySelector;

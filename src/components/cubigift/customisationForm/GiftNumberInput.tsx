import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import styles from "@/styles/cubigift.module.scss";
import { Controller, useFormContext } from "react-hook-form";
import { FC } from "react";

const GiftNumberInput: FC = () => {
  const { control } = useFormContext();

  return (
    <Grid size={12}>
      <Controller
        name="giftsNumber"
        control={control}
        rules={{
          required: "You need at least 1 gift",
          min: { value: 1, message: "Minimum number of gifts is 1" },
          max: { value: 100, message: "Maximum number of gifts is 100" },
        }}
        render={({ field, fieldState }) => (
          <TextField
            className={styles.textFieldGiftsNumber}
            label="Number of gifts"
            type="number"
            {...field}
            value={field.value || ""}
            onChange={(e) => field.onChange(Number(e.target.value))}
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            fullWidth
          />
        )}
      />
      <Typography className={styles.maxGiftNumberLegend}>Max: 100</Typography>
    </Grid>
  );
};

export default GiftNumberInput;

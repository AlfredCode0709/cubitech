import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";
import { FC } from "react";

const ReferralCodeInput: FC = () => {
  const { control } = useFormContext();

  return (
    <Grid size={12}>
      <Controller
        name="referralCode"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            label="Referral Code (optional)"
            {...field}
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            fullWidth
            sx={{
              backgroundColor: "white",
              "& .MuiOutlinedInput-root": {
                backgroundColor: "white",
              },
            }}
          />
        )}
      />
    </Grid>
  );
};

export default ReferralCodeInput;

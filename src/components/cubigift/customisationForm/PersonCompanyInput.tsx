import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import styles from "@/styles/cubigift.module.scss";
import { Controller, useFormContext } from "react-hook-form";
import { FC } from "react";

const PersonCompanyInput: FC = () => {
  const { control } = useFormContext();

  return (
    <Grid size={6}>
      <Controller
        name="personOrCompanyName"
        control={control}
        rules={{ required: "Person / Company Name is required" }}
        render={({ field, fieldState }) => (
          <TextField
            className={styles.textFieldLeft}
            label="Your Name / Company Name"
            {...field}
            value={field.value || ""}
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            fullWidth
          />
        )}
      />
    </Grid>
  );
};

export default PersonCompanyInput;

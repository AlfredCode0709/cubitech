import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import { FormValues } from "./ItemData";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { FC } from "react";

interface SpecialNotesProps {
  control: Control<FormValues>;
  errors: FieldErrors<FormValues>;
}

const SpecialNotes: FC<SpecialNotesProps> = ({ control, errors }) => (
  <Grid size={8}>
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
        name="specialNotes"
        control={control}
        rules={{
          validate: (value) =>
            !value ||
            value.length <= 75 ||
            "Special notes must be under 75 characters",
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Special Notes (Optional)"
            variant="outlined"
            error={!!errors.specialNotes}
            helperText={errors.specialNotes?.message}
          />
        )}
      />
    </FormControl>
  </Grid>
);

export default SpecialNotes;

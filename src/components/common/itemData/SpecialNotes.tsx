import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import { FormValues } from "./ItemData";
import { Control, Controller } from "react-hook-form";
import { FC } from "react";

interface SpecialNotesProps {
  control: Control<FormValues>;
}

const SpecialNotes: FC<SpecialNotesProps> = ({ control }) => (
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
        render={({ field }) => (
          <TextField
            {...field}
            label="Special Notes (Optional)"
            variant="outlined"
          />
        )}
      />
    </FormControl>
  </Grid>
);

export default SpecialNotes;

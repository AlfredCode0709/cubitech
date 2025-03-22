import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid2";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import commonStyles from "@/styles/common.module.scss";
import { FormValues } from "./ItemData";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { useRouter } from "next/router";
import { FC } from "react";

interface OptionSelectorProps {
  options: { value: string; label: string }[];
  control: Control<FormValues>;
  errors: FieldErrors<FormValues>;
}

const OptionSelector: FC<OptionSelectorProps> = ({
  options,
  control,
  errors,
}) => {
  const router = useRouter();
  const isCubiFood = router.pathname.startsWith("/cubifood");
  const selectThemeColor = isCubiFood ? "#08834e" : "primary";
  const radioHoverColor = isCubiFood ? "#e7fef4" : "var(--primary-light)";

  return (
    <Grid size={12}>
      <FormControl
        sx={{
          "& .MuiFormLabel-root.Mui-focused": { color: selectThemeColor },
          "& .MuiRadio-root": {
            "&.Mui-checked": { color: selectThemeColor },
            "&:hover": { background: radioHoverColor },
          },
        }}
        fullWidth
      >
        <FormLabel>Options</FormLabel>
        <Box className={commonStyles.optionSelector}>
          <Controller
            name="option"
            control={control}
            rules={{ required: "Please select an option" }}
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
        </Box>
        {errors.option?.message && (
          <Typography className={commonStyles.optionSelectorError}>{String(errors.option.message)}</Typography>
        )}
      </FormControl>
    </Grid>
  );
};

export default OptionSelector;

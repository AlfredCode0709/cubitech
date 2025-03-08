import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid2";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import { Controller } from "react-hook-form";
import { useRouter } from "next/router";
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
};

export default OptionSelector;

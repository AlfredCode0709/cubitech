import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid2";
import commonStyles from "@/styles/common.module.scss";
import { Control, Controller } from "react-hook-form";
import { FormValues } from "./ItemData";
import { FC, Fragment } from "react";

interface CustomisationSelectorProps {
  customisations: string[];
  control: Control<FormValues>;
}

const CustomisationSelector: FC<CustomisationSelectorProps> = ({
  customisations,
  control,
}) => (
  <Grid size={12}>
    <FormControl
      sx={{
        "& .MuiFormLabel-root.Mui-focused": { color: "#08834e" },
        "& .MuiCheckbox-root": {
          "&.Mui-checked": { color: "#08834e" },
          "&:hover": { background: "#e7fef4" },
        },
      }}
      fullWidth
    >
      <FormLabel>Customisation</FormLabel>
      <Box className={commonStyles.customisationSelector}>
        <Controller
          name="customisations"
          control={control}
          render={({ field }) => (
            <Fragment>
              {customisations.map((label, index) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      checked={
                        Array.isArray(field.value) &&
                        field.value.includes(label)
                      }
                      onChange={(e) => {
                        const checked = e.target.checked;
                        const currentValue = Array.isArray(field.value)
                          ? field.value
                          : [];
                        field.onChange(
                          checked
                            ? [...currentValue, label]
                            : currentValue.filter((val) => val !== label)
                        );
                      }}
                    />
                  }
                  label={label}
                />
              ))}
            </Fragment>
          )}
        />
      </Box>
    </FormControl>
  </Grid>
);

export default CustomisationSelector;

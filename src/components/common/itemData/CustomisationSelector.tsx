import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid2";
import { Controller } from "react-hook-form";
import { FC } from "react";

interface CustomisationSelectorProps {
  customisations: string[];
  control: any;
}

const CustomizationSelector: FC<CustomisationSelectorProps> = ({
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
    >
      <FormLabel>Customisation</FormLabel>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        <Controller
          name="customizations"
          control={control}
          render={({ field }) => (
            <>
              {customisations.map((label, index) => (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      checked={field.value.includes(label)}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        field.onChange(
                          checked
                            ? [...field.value, label]
                            : field.value.filter((val: any) => val !== label),
                        );
                      }}
                    />
                  }
                  label={label}
                />
              ))}
            </>
          )}
        />
      </Box>
    </FormControl>
  </Grid>
);

export default CustomizationSelector;

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid2";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from "../../styles/cubifood.module.scss";
import { useRouter } from "next/router";
import { FC } from "react";
import { useForm, Controller } from "react-hook-form";

interface FormValues {
  option: string;
  customizations: string[];
  specialNotes?: string;
  quantity: number;
}

const ItemData: FC<any> = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      option: "",
      customizations: [],
      specialNotes: "",
      quantity: 1,
    },
  });

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
  ];

  const customizations = ["Custom 1", "Custom 2", "Custom 3", "Custom 4"];

  const onSubmit = (data: FormValues) => {
    console.log("Form Submitted:", data);
  };

  return (
    <Box className={styles.itemData}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid size={4}>
            <Card variant={"outlined"}>
              <Box className={styles.cardMediaContainer}>
                <CardMedia
                  className={styles.cardMedia}
                  component={"img"}
                  image={"/cubitech_brands/cubifood_light.svg"}
                  alt={"Item Image"}
                />
              </Box>
            </Card>
          </Grid>
          <Grid size={8}>
            <Box className={styles.itemContent}>
              <Typography className={styles.itemName}>Item Name</Typography>
              <Typography className={styles.itemPrice}>$9.99</Typography>

              {/* Order Customisation */}
              <Grid container className={styles.orderCustomisation} spacing={2}>
                {/* Options - Mandatory */}
                <Grid size={12}>
                  <FormControl
                    sx={{
                      "& .MuiFormLabel-root.Mui-focused": { color: "#08834e" },
                      "& .MuiRadio-root": {
                        "&.Mui-checked": { color: "#08834e" },
                        "&:hover": { background: "#e7fef4" },
                      },
                    }}
                  >
                    <FormLabel>Options</FormLabel>
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
                      <Typography color="error">
                        {errors.option.message}
                      </Typography>
                    )}
                  </FormControl>
                </Grid>

                {/* Checkboxes - Optional */}
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
                            {customizations.map((label, index) => (
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
                                          : field.value.filter(
                                              (val) => val !== label,
                                            ),
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

                {/* Special Notes - Optional */}
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

                {/* Quantity - Mandatory (Min: 1, Max: 100) */}
                <Grid size={4}>
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
                      name="quantity"
                      control={control}
                      rules={{
                        required: "Quantity is required",
                        min: { value: 1, message: "Minimum quantity is 1" },
                        max: {
                          value: 100,
                          message: "Maximum quantity is 100",
                        },
                      }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Quantity"
                          type="number"
                          variant="outlined"
                          fullWidth
                          error={!!errors.quantity}
                          helperText={errors.quantity?.message}
                          inputProps={{ min: 1, max: 100 }}
                          onChange={(e) => {
                            let value = Number(e.target.value);
                            if (value > 100) value = 100;
                            if (value < 1) value = 1;
                            field.onChange(value);
                          }}
                        />
                      )}
                    />
                  </FormControl>
                </Grid>
              </Grid>

              {/* Action Buttons */}
              <Button
                className={styles.button}
                variant="contained"
                size="large"
                startIcon={<ArrowBackIcon />}
                onClick={() => router.back()}
              >
                Back
              </Button>
              <Button
                className={styles.button}
                variant="contained"
                size="large"
                onClick={() => reset()}
              >
                Reset
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                startIcon={<AddIcon />}
                disabled
                //disabled={!watch("option") || !watch("quantity")}
              >
                Add to Cart
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ItemData;

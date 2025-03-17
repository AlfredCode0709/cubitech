import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import styles from "@/styles/cubigift.module.scss";
import { Controller, useFormContext } from "react-hook-form";
import { FC, useEffect } from "react";

interface CardTitleInputProps {
  setSelectedCardTitle: (title: string) => void;
}

const CardTitleInput: FC<CardTitleInputProps> = ({
  setSelectedCardTitle,
}) => {
  const { control, trigger, clearErrors, watch } = useFormContext();
  const cardTitle = watch("cardTitle");

  useEffect(() => {
    if (cardTitle) clearErrors("cardTitle"); 
  }, [cardTitle, clearErrors]);

  return (
    <Grid size={6}>
      <Controller
        name="cardTitle"
        control={control}
        rules={{ required: "Card Title is required" }}
        render={({ field, fieldState }) => (
          <TextField
            className={styles.textFieldRight}
            label="Card Title"
            {...field}
            value={field.value}
            onChange={(e) => {
              field.onChange(e.target.value);
              setSelectedCardTitle(e.target.value);
              clearErrors("cardTitle");
              trigger("cardTitle");
            }}
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            fullWidth
          />
        )}
      />
    </Grid>
  );
};

export default CardTitleInput;

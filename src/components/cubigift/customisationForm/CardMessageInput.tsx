import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import styles from "@/styles/cubigift.module.scss";
import { Controller, useFormContext } from "react-hook-form";
import { FC, Fragment, useEffect } from "react";

interface CardMessageInputProps {
  setSelectedCardMessage: (message: string) => void;
}

const CardMessageInput: FC<CardMessageInputProps> = ({
  setSelectedCardMessage,
}) => {
  const { control, trigger, clearErrors, watch } = useFormContext();
  const cardMessage = watch("cardMessage");

  useEffect(() => {
    if (cardMessage) clearErrors("cardMessage"); // ✅ Clear error if value exists
  }, [cardMessage, clearErrors]);

  return (
    <Grid size={12}>
      <Controller
        name="cardMessage"
        control={control}
        rules={{ required: "Message is required" }}
        render={({ field, fieldState }) => (
          <Fragment>
            <TextField
              label="Message"
              {...field}
              value={field.value} 
              onChange={(e) => {
                field.onChange(e.target.value);
                setSelectedCardMessage(e.target.value); 
                clearErrors("cardMessage");
                trigger("cardMessage");
              }}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              fullWidth
              slotProps={{
                htmlInput: { maxLength: 100 }
              }}
            />
            <Typography className={styles.characterCount}>
              {field.value.length}/100 characters
            </Typography>
          </Fragment>
        )}
      />
    </Grid>
  );
};

export default CardMessageInput;

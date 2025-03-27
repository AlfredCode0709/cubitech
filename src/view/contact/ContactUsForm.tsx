"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import styles from "@/styles/contactus.module.scss";
import { formFields, FormField } from "@/components/contact/FormFields";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { FC } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  feedback: string;
};

const ContactUsForm: FC = () => {
  const { control, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      feedback: ""
    }
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Data Submitted:", data);
    reset(); 
  };

  return (
    <Box
      className={styles.contactusForm}
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography className={styles.title} gutterBottom>
        Contact Me
      </Typography>
      <Typography className={styles.subtitle}>
        Let me know what I can improve in my portfolio!
      </Typography>

      {formFields.map(({ name, label, type, multiline, rows, rules }: FormField) => (
        <Controller
          key={name}
          name={name}
          control={control}
          rules={rules}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label={label}
              margin="normal"
              type={type || "text"}
              multiline={multiline}
              rows={rows}
              error={!!errors[name as keyof FormData]}
              helperText={errors[name as keyof FormData]?.message}
            />
          )}
        />
      ))}

      <Stack display={"flex"} flexDirection={"row"} gap={"16px"} marginTop={"2.5%"}>
        <Button variant="contained" color="primary" size="large" fullWidth onClick={() => reset()}>
          Reset
        </Button>
        <Button variant="contained" color="primary" size="large" type="submit" fullWidth>
          Send Feedback
        </Button>
      </Stack>
    </Box>
  );
};

export default ContactUsForm;

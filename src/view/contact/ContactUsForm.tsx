import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import ActionButtons from "@/components/contact/ActionButtons";
import styles from "@/styles/contactus.module.scss";
import { enqueueSnackbar } from "notistack";
import { formFields, FormField } from "@/components/contact/FormFields";
import { useForm, Controller } from "react-hook-form";
import { FC, useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  feedback: string;
}

const ContactUsForm: FC = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      feedback: "",
    },
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        enqueueSnackbar("Feedback submitted successfully!", { variant: "success" });
        reset();
      } else {
        const result = await response.json();
        enqueueSnackbar(result.message || "Failed to submit feedback", { variant: "error" });
      }
    } catch {
      enqueueSnackbar("Something went wrong. Try again later.", { variant: "error" });
    } finally {
      setLoading(false);
    }
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
        Let me know what I can do to improve my portfolio!
      </Typography>

      {formFields.map(
        ({ name, label, type, multiline, rows, rules }: FormField) => (
          <Controller
            key={name}
            name={name}
            control={control}
            rules={rules}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                className={styles.textField}
                label={label}
                type={type || "text"}
                multiline={multiline}
                rows={rows}
                error={!!errors[name as keyof FormData]}
                helperText={errors[name as keyof FormData]?.message}
              />
            )}
          />
        )
      )}

      <ActionButtons reset={reset} loading={loading} />
    </Box>
  );
};

export default ContactUsForm;

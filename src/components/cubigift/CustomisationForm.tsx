import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import GiftCardSelection from "./GiftCardSelection";
import OrderSummary from "./OrderSummary";
import styles from "../../styles/cubigift.module.scss";
import { FormData, CustomisationFormProps } from "./types";
import { FC, useEffect, useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

const CustomisationForm: FC<CustomisationFormProps> = ({
  selectedCardTitle,
  selectedCardMessage,
  setSelectedCardTitle,
  setSelectedCardMessage,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [selectedGiftAmount, setSelectedGiftAmount] = useState<number | null>(
    null
  );
  const [giftsNumber, setGiftsNumber] = useState<number>(1);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  useEffect(() => {
    setValue("cardTitle", selectedCardTitle);
    setValue("cardMessage", selectedCardMessage);
  }, [selectedCardTitle, selectedCardMessage, setValue]);

  useEffect(() => {
    if (selectedGiftAmount && giftsNumber) {
      setTotalAmount(selectedGiftAmount * giftsNumber);
    }
  }, [selectedGiftAmount, giftsNumber]);

  const personOrCompanyName = watch("personOrCompanyName");
  const cardTitle = watch("cardTitle");
  const cardMessage = watch("cardMessage");

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const updatedData = { ...data, selectedGiftAmount, totalAmount };
    console.log("Form Data: ", updatedData);
  };

  const handleReset = () => {
    reset();
    setSelectedGiftAmount(null);
    setGiftsNumber(1);
    setTotalAmount(0);
    setSelectedCardTitle("");
    setSelectedCardMessage("");
  };

  const methods = useForm<FormData>();

  return (
    <Box className={styles.customisationForm}>
      <Typography className={styles.heading}>Design Your Gift Card</Typography>
      <FormProvider {...methods}>
        <Box
          className={styles.formContainer}
          component={"form"}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid container spacing={4}>
            <Grid container size={7} spacing={4}>
              <Grid size={6}>
                <TextField
                  className={styles.textFieldLeft}
                  label="Your Name / Company Name"
                  slotProps={{
                    inputLabel: {
                      shrink: Boolean(personOrCompanyName),
                    },
                  }}
                  {...register("personOrCompanyName", {
                    required: "Person / Company Name is required",
                  })}
                  error={!!errors.personOrCompanyName}
                  helperText={errors.personOrCompanyName?.message}
                />
              </Grid>

              <Grid size={6}>
                <TextField
                  className={styles.textFieldRight}
                  label="Card Title"
                  slotProps={{
                    inputLabel: {
                      shrink: Boolean(cardTitle),
                    },
                  }}
                  {...register("cardTitle", {
                    required: "Card Title is required",
                  })}
                  value={selectedCardTitle}
                  onChange={(e) => setSelectedCardTitle(e.target.value)}
                  error={!!errors.cardTitle}
                  helperText={errors.cardTitle?.message}
                />
              </Grid>

              <Grid size={12}>
                <TextField
                  label="Message"
                  slotProps={{
                    inputLabel: {
                      shrink: Boolean(cardMessage),
                    },
                    htmlInput: {
                      maxLength: 100,
                    },
                  }}
                  {...register("cardMessage", {
                    required: "Message is required",
                  })}
                  value={selectedCardMessage}
                  onChange={(e) => setSelectedCardMessage(e.target.value)}
                  error={!!errors.cardMessage}
                  helperText={errors.cardMessage?.message}
                  fullWidth
                />
                <Typography className={styles.characterCount}>
                  {cardMessage?.length || 0}/100 characters
                </Typography>
              </Grid>

              <GiftCardSelection
                selectedGiftAmount={selectedGiftAmount}
                setSelectedGiftAmount={setSelectedGiftAmount}
              />

              <Grid size={12}>
                <TextField
                  className={styles.textFieldGiftsNumber}
                  label="Number of gifts"
                  type="number"
                  slotProps={{
                    inputLabel: {
                      shrink: !!giftsNumber || giftsNumber === 0,
                    },
                    htmlInput: {
                      min: 1,
                      max: 100,
                    },
                  }}
                  {...register("giftsNumber", {
                    required: "You need at least 1 gift",
                    min: {
                      value: 1,
                      message: "Minimum number of gifts is 1",
                    },
                    max: {
                      value: 100,
                      message: "Maximum number of gifts is 100",
                    },
                  })}
                  value={giftsNumber}
                  onChange={(e) =>
                    setGiftsNumber(
                      Math.max(1, Math.min(100, Number(e.target.value)))
                    )
                  }
                  error={!!errors.giftsNumber}
                  helperText={errors.giftsNumber?.message}
                />
                <Typography className={styles.maxGiftNumberLegend}>
                  Max: 100
                </Typography>
              </Grid>
            </Grid>

            <Grid container size={5}>
              <OrderSummary
                giftsNumber={giftsNumber}
                selectedGiftAmount={selectedGiftAmount}
                totalAmount={totalAmount}
                register={register}
                errors={errors}
                handleReset={handleReset}
              />
            </Grid>
          </Grid>
        </Box>
      </FormProvider>
    </Box>
  );
};

export default CustomisationForm;

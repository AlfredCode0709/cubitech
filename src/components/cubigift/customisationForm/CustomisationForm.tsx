import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import CardTitleInput from "./CardTitleInput";
import CardMessageInput from "./CardMessageInput";
import GiftCardSelection from "./GiftCardSelection";
import GiftNumberInput from "./GiftNumberInput";
import OrderSummary from "./OrderSummary";
import PersonCompanyInput from "./PersonCompanyInput";
import styles from "@/styles/cubigift.module.scss";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { FC, useEffect } from "react";

interface CustomisationFormData {
  giftsNumber: number;
  cardTitle: string;
  cardMessage: string;
  selectedGiftAmount: number | null;
}

interface CustomisationFormProps {
  selectedCardTitle: string;
  selectedCardMessage: string;
  setSelectedCardTitle: (title: string) => void;
  setSelectedCardMessage: (message: string) => void;
}

const CustomisationForm: FC<CustomisationFormProps> = ({
  selectedCardTitle,
  selectedCardMessage,
  setSelectedCardTitle,
  setSelectedCardMessage,
}) => {
  const methods = useForm<CustomisationFormData>({
    mode: "onTouched",
    defaultValues: {
      giftsNumber: 1,
      cardTitle: selectedCardTitle || "",
      cardMessage: selectedCardMessage || "",
      selectedGiftAmount: null,
    },
  });

  const { setValue, watch, handleSubmit, trigger } = methods;
  const giftsNumber = watch("giftsNumber", 1);
  const selectedGiftAmount = watch("selectedGiftAmount", null);
  const totalAmount = selectedGiftAmount !== null ? selectedGiftAmount * giftsNumber : 0;

  useEffect(() => {
    setValue("cardTitle", selectedCardTitle);
    if (selectedCardTitle) trigger("cardTitle");
  }, [selectedCardTitle, setValue, trigger]);

  useEffect(() => {
    setValue("cardMessage", selectedCardMessage);
    if (selectedCardMessage) trigger("cardMessage");
  }, [selectedCardMessage, setValue, trigger]);

  const onSubmit: SubmitHandler<CustomisationFormData> = (data) => {
    console.log(data);
    methods.reset();
  };

  return (
    <Box className={styles.customisationForm}>
      <Typography className={styles.heading}>Design Your Gift Card</Typography>
      <FormProvider {...methods}>
        <Box
          className={styles.formContainer}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid container spacing={4}>
            <Grid container size={7} spacing={4}>
              <PersonCompanyInput />

              <CardTitleInput
                setSelectedCardTitle={setSelectedCardTitle}
              />

              <CardMessageInput
                setSelectedCardMessage={setSelectedCardMessage}
              />

              <GiftCardSelection />

              <GiftNumberInput />
            </Grid>
            <Grid container size={5}>
              <OrderSummary totalAmount={totalAmount} reset={methods.reset} />
            </Grid>
          </Grid>
        </Box>
      </FormProvider>
    </Box>
  );
};

export default CustomisationForm;

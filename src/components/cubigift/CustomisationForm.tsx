import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "../../styles/cubigift.module.scss";

type FormData = {
  personOrCompanyName: string;
  cardTitle: string;
  cardMessage: string;
  selectedGiftAmount: number;
  giftsNumber: number;
  referralCode: string;
  totalAmount: number;
};

interface CustomisationFormProps {
  selectedCardTitle: string;
  selectedCardMessage: string;
  setSelectedCardTitle: (title: string) => void;
  setSelectedCardMessage: (message: string) => void;
}

const CustomisationForm: React.FC<CustomisationFormProps> = ({
  selectedCardTitle,
  selectedCardMessage,
  setSelectedCardTitle,
  setSelectedCardMessage,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const [selectedGiftAmount, setSelectedGiftAmount] = useState<number | null>(
    null
  );
  const [giftsNumber, setGiftsNumber] = useState<number>(1);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  // Set default values for card title and message when props change
  useEffect(() => {
    setValue("cardTitle", selectedCardTitle);
    setValue("cardMessage", selectedCardMessage);
  }, [selectedCardTitle, selectedCardMessage, setValue]);

  useEffect(() => {
    if (selectedGiftAmount && giftsNumber) {
      setTotalAmount(selectedGiftAmount * giftsNumber);
    }
  }, [selectedGiftAmount, giftsNumber]);

  // Function to handle gift amount selection
  const handleGiftAmountSelect = (value: number) => {
    setSelectedGiftAmount(value);
  };

  const handleGiftsNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = Math.max(1, Math.min(100, parseInt(event.target.value, 10))); // Ensure the value stays within 1-100
    setGiftsNumber(value); // Update the number of gifts state
  };

  const onSubmit: SubmitHandler<FormData> = (data: any) => {
    const updatedData = {
      ...data,
      selectedGiftAmount,
      totalAmount,
    };

    console.log("Form Data: ", updatedData);
  };

  const giftCardAmount = [10, 20, 30, 50, 80, 100];

  return (
    <Box className={styles.customisationForm}>
      <Typography className={styles.heading}>Design Your Gift Card</Typography>
      <Box
        className={styles.formContainer}
        component={"form"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid container>
          <Grid item container xs={7} rowGap={4}>
            <Grid item xs={6}>
              <TextField
                label="Your Name / Company Name"
                {...register("personOrCompanyName", {
                  required: "Person / Company Name is required",
                })}
                error={!!errors.personOrCompanyName}
                helperText={errors.personOrCompanyName?.message}
                variant={"outlined"}
                className={styles.textFieldLeft}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Card Title"
                {...register("cardTitle", {
                  required: "Card Title is required",
                })}
                value={selectedCardTitle}
                onChange={(e) => setSelectedCardTitle(e.target.value)} // Update title
                InputLabelProps={{
                  shrink: !!selectedCardTitle, // Shrink the label if there's text
                }}
                error={!!errors.cardTitle}
                helperText={errors.cardTitle?.message}
                variant={"outlined"}
                className={styles.textFieldRight}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                {...register("cardMessage", {
                  required: "Message is required",
                })}
                value={selectedCardMessage}
                onChange={(e) => setSelectedCardMessage(e.target.value)} // Update message
                InputLabelProps={{
                  shrink: !!selectedCardMessage, // Shrink the label if there's text
                }}
                error={!!errors.cardMessage}
                helperText={errors.cardMessage?.message}
                variant={"outlined"}
                fullWidth
                inputProps={{ maxLength: 100 }}
              />

              {/* Character Count Display */}
              <Typography className={styles.characterCount}>
                {selectedCardMessage.length}/100 characters
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={styles.amountPerGiftHeading}>
                Amount per Gift
              </Typography>

              <Grid container spacing={1}>
                {giftCardAmount.map((value) => (
                  <Grid item xs={4} className={styles.giftItemBox} key={value}>
                    <Card
                      variant={"outlined"}
                      className={`${styles.card} ${
                        selectedGiftAmount === value ? styles.selected : ""
                      }`}
                      onClick={() => handleGiftAmountSelect(value)}
                    >
                      <Typography className={styles.cardValue}>
                        S${value}
                      </Typography>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Number of gifts"
                type="number" // Ensures numeric input
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
                value={giftsNumber} // Display the current number of gifts
                onChange={handleGiftsNumberChange} // Update the state on input change
                error={!!errors.giftsNumber}
                helperText={errors.giftsNumber?.message}
                variant="outlined"
                className={styles.textFieldGiftsNumber}
                InputProps={{ inputProps: { min: 1, max: 100 } }}
              />
              <Typography className={styles.maxGiftNumberLegend}>
                Max: 100
              </Typography>
            </Grid>
          </Grid>
          <Grid item container xs={5}>
            <Card className={styles.orderCard} variant={"outlined"}>
              <Typography className={styles.title}>Order Summary</Typography>
              <Grid
                className={styles.gridContainer}
                container
                spacing={2}
                rowGap={4}
              >
                <Grid item xs={2}>
                  <Card className={styles.gridNumber} variant={"outlined"}>
                    {giftsNumber}x
                  </Card>
                </Grid>
                <Grid item xs={7}>
                  <Typography className={styles.cubiGiftVoucherInfoBox}>
                    <span className={styles.span}>CubiGifts vouchers</span>{" "}
                    <br />
                    Value &#8226; S${selectedGiftAmount || 0}
                  </Typography>
                </Grid>
                <Grid item xs={3} className={styles.totalAmountBox}>
                  <Typography>S${totalAmount.toFixed(2)}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Referral Code (optional)"
                    {...register("referralCode")}
                    error={!!errors.referralCode}
                    helperText={errors.referralCode?.message}
                    variant={"outlined"}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} className={styles.totalAmountCalculation}>
                  <Typography className={styles.totalHeader}>Total</Typography>
                  <Typography className={styles.number}>
                    S${totalAmount.toFixed(2)}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    className={styles.buyNowButton}
                    type={"submit"}
                    variant={"contained"}
                    color={"primary"}
                    size={"large"}
                    fullWidth
                  >
                    Buy Now
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CustomisationForm;

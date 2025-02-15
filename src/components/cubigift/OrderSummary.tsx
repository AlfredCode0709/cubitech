import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import styles from "../../styles/cubigift.module.scss";

interface Props {
  giftsNumber: number;
  selectedGiftAmount: number | null;
  totalAmount: number;
  register: any;
  errors: any;
  handleReset: () => void;
}

const OrderSummary: React.FC<Props> = ({
  giftsNumber,
  selectedGiftAmount,
  totalAmount,
  register,
  errors,
  handleReset,
}) => {
  return (
    <Card className={styles.orderCard} variant={"outlined"}>
      <Typography className={styles.title}>Order Summary</Typography>
      <Grid className={styles.content} container spacing={2} rowGap={4}>
        <Grid size={2}>
          <Card className={styles.gridNumber} variant={"outlined"}>
            {giftsNumber}x
          </Card>
        </Grid>

        <Grid size={7}>
          <Typography className={styles.cubiGiftVoucherInfoBox}>
            <span className={styles.span}>CubiGifts vouchers</span>
            <br />
            Value • S${selectedGiftAmount || 0}
          </Typography>
        </Grid>

        <Grid size={3} className={styles.totalAmountBox}>
          <Typography>S${totalAmount.toFixed(2)}</Typography>
        </Grid>

        <Grid size={12}>
          <TextField
            label="Referral Code (optional)"
            slotProps={{
              inputLabel: {
                shrink: Boolean(register("referralCode")),
              },
            }}
            {...register("referralCode")}
            error={!!errors.referralCode}
            helperText={errors.referralCode?.message}
            fullWidth
          />
        </Grid>

        <Grid size={12} className={styles.totalAmountCalculation}>
          <Typography className={styles.totalHeader}>Total</Typography>
          <Typography className={styles.number}>
            S${totalAmount.toFixed(2)}
          </Typography>
        </Grid>

        <Grid size={6}>
          <Button
            className={styles.resetButton}
            onClick={handleReset}
            variant={"contained"}
            fullWidth
          >
            Reset
          </Button>
        </Grid>
        <Grid size={6}>
          <Button
            className={styles.buyNowButton}
            type={"submit"}
            variant={"contained"}
            fullWidth
          >
            Buy Now
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default OrderSummary;

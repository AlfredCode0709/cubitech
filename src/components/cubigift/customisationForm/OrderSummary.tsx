import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import ReferralCodeInput from "./ReferralCodeInput";
import styles from "@/styles/cubigift.module.scss";
import { useFormContext } from "react-hook-form";
import { FC } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

interface OrderSummaryProps {
  totalAmount: number;
  reset: () => void;
}

const OrderSummary: FC<OrderSummaryProps> = ({ totalAmount, reset }) => {
  const { watch } = useFormContext();
  const giftsNumber = watch("giftsNumber") || 0;
  const selectedGiftAmount = watch("selectedGiftAmount") || 0;

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
            Value • S${selectedGiftAmount}
          </Typography>
        </Grid>

        <Grid size={3} className={styles.totalAmountBox}>
          <Typography>S${totalAmount.toFixed(2)}</Typography>
        </Grid>

        <ReferralCodeInput />

        <Grid size={12} className={styles.totalAmountCalculation}>
          <Typography className={styles.totalHeader}>Total</Typography>
          <Typography className={styles.number}>
            S${totalAmount.toFixed(2)}
          </Typography>
        </Grid>

        <Grid size={12}>
          <Stack className={styles.buttonStack}>
            <Button
              onClick={() => reset()}
              variant={"contained"}
              size={"large"}
              fullWidth
            >
              Reset
            </Button>
            <Button
              type="submit"
              variant={"contained"}
              size={"large"}
              fullWidth
            >
              Buy Now
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
};

export default OrderSummary;

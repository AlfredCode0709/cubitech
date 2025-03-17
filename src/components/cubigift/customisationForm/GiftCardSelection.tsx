import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import styles from "@/styles/cubigift.module.scss";
import { Controller, useFormContext } from "react-hook-form";
import { FC, Fragment } from "react";

const giftCardAmounts = [10, 20, 30, 50, 80, 100];

const GiftCardSelection: FC = () => {
  const { control } = useFormContext();

  return (
    <Grid size={12}>
      <Typography className={styles.amountPerGiftHeading}>
        Amount per Gift
      </Typography>
      <Controller
        name="selectedGiftAmount"
        control={control}
        rules={{ required: "Please select a gift amount" }}
        render={({ field, fieldState }) => (
          <Fragment>
            <Grid container spacing={1}>
              {giftCardAmounts.map((value) => (
                <Grid size={4} key={value} className={styles.giftItemBox}>
                  <Card
                    variant="outlined"
                    className={`${styles.card} ${
                      field.value === value ? styles.selected : ""
                    }`}
                    onClick={() => field.onChange(value)}
                  >
                    <Typography className={styles.cardValue}>
                      S${value}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
            {fieldState.error && (
              <Typography className={styles.giftAmountError}>
                {fieldState.error.message}
              </Typography>
            )}
          </Fragment>
        )}
      />
    </Grid>
  );
};

export default GiftCardSelection;

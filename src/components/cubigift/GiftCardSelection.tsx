import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import styles from "../../styles/cubigift.module.scss";
import { FC } from "react";

const giftCardAmounts = [10, 20, 30, 50, 80, 100];

interface Props {
  selectedGiftAmount: number | null;
  setSelectedGiftAmount: (amount: number) => void;
}

const GiftCardSelection: FC<Props> = ({
  selectedGiftAmount,
  setSelectedGiftAmount,
}) => {
  return (
    <Grid size={12}>
                     <Typography className={styles.amountPerGiftHeading}>
                Amount per Gift
              </Typography>
              <Grid container spacing={1}>
      {giftCardAmounts.map((value) => (
        <Grid size={4} key={value} className={styles.giftItemBox}>
          <Card
            variant={"outlined"}
            className={`${styles.card} ${
              selectedGiftAmount === value ? styles.selected : ""
            }`}
            onClick={() => setSelectedGiftAmount(value)}
          >
            <Typography className={styles.cardValue}>S${value}</Typography>
          </Card>
        </Grid>
      ))}</Grid>
    </Grid>
  );
};

export default GiftCardSelection;

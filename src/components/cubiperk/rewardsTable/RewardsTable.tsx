import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import RewardItem from "./RewardItem";
import rewardItems from "./rewardItems";
import styles from "@/styles/cubiperk.module.scss";
import { FC } from "react";

const RewardsTable: FC = () => {
  return (
    <Box className={styles.rewardsTable}>
      <Typography className={styles.title}>
        Earn rewards with every transaction using your CubiPay Wallet or
        CubiPayLater
      </Typography>

      <Box className={styles.infoBox}>
        <Grid container className={styles.gridContainer} spacing={2}>
          <Grid size={6}>
            <Typography className={styles.header}>How you pay</Typography>
          </Grid>
          <Grid size={6}>
            <Typography className={styles.header}>What you earn</Typography>
          </Grid>

          {rewardItems.map((item, index) => (
            <RewardItem key={index} {...item} />
          ))}

          <Grid size={12}>
            <Typography className={styles.note}>
              CubiPay in-store is applicable to QR transactions (excluding
              PayNow) with a minimum spend of $3 after promotions and/or
              discounts applied.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default RewardsTable;

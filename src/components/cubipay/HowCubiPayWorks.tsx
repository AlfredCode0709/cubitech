import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PaymentFlow from "./PaymentFlow";
import TransactionReplayFlow from "./TransactionReplayFlow";
import styles from "../../styles/cubipay.module.scss";

const HowCubiPayWorks: React.FC<any> = () => {
  return (
    <Box className={styles.howCubiPayWorksBlock}>
      <Typography className={styles.title}>How CubiPay Wallet works</Typography>
      <Grid container className={styles.gridContainer} spacing={2}>
        <Grid item xs={6}>
          <Typography className={styles.title}>
            Effortless Transactions
          </Typography>
          <Typography className={styles.description}>
            Easily split the bill after a meal — send or request transfers
            instantly with no fees involved.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <PaymentFlow />
        </Grid>
        <Grid item xs={6}>
          <Typography className={styles.title}>Stay in Charge</Typography>
          <Typography className={styles.description}>
            Get instant payment notifications and access your full transaction
            history anytime in the app.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <TransactionReplayFlow />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HowCubiPayWorks;

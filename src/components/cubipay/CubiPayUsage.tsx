import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PaymentFlow from "./paymentFlow/PaymentFlow";
import TransactionReplayFlow from "./transactionReplayFlow/TransactionReplayFlow";
import styles from "@/styles/cubipay.module.scss";
import { FC } from "react";

const CubiPayUsage: FC = () => {
  return (
    <Box className={styles.cubiPayUsage}>
      <Typography className={styles.header}>
        How CubiPay Wallet works
      </Typography>
      <Stack className={styles.content}>
        <Box className={styles.leftContent}>
          <Typography className={styles.title} component={"div"}>
            Effortless Transactions
            <br />
            <span className={styles.descr}>
              Easily split the bill after a meal — send or request transfers
              instantly with no fees involved.
            </span>
          </Typography>
        </Box>
        <Box className={styles.rightContent}>
          <PaymentFlow />
        </Box>
      </Stack>

      <Stack className={styles.content}>
        <Box className={styles.leftContent}>
          <Typography className={styles.title} component={"div"}>
            Stay in Charge
            <br />
            <span className={styles.descr}>
              Get instant payment notifications and access your full transaction
              history anytime in the app.
            </span>
          </Typography>
        </Box>
        <Box className={styles.rightContent}>
          <TransactionReplayFlow />
        </Box>
      </Stack>
    </Box>
  );
};

export default CubiPayUsage;

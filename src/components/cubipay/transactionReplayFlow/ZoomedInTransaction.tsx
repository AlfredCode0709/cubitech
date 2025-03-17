import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import commonStyles from "@/styles/common.module.scss";
import styles from "@/styles/cubipay.module.scss";
import { FC, useEffect } from "react";

interface ZoomedInTransactionProps {
  onSuccess: () => void;
}

const ZoomedInTransaction: FC<ZoomedInTransactionProps> = ({ onSuccess }) => {
  useEffect(() => {
    const timer = setTimeout(onSuccess, 1600);
    return () => clearTimeout(timer);
  }, [onSuccess]);

  return (
    <Box className={commonStyles.container}>
      <Card className={commonStyles.card} variant={"outlined"}>
        {/* Title */}
        <Typography className={styles.transactionDetailsTitle}>
          Transaction Details
        </Typography>

        {/* Amount */}
        <Typography className={styles.transactionAmountData}>
          SGD <span className={styles.amountValue}>14.50</span>
        </Typography>

        {/* Paid To */}
        <TransactionRow label={"Paid To"} value={"McDonald's ARC"} />

        {/* Refund Request */}
        <TransactionRow
          label={"Request a refund"}
          value={<ArrowForwardIosIcon className={styles.arrowForwardIcon} />}
        />
      </Card>
    </Box>
  );
};

interface TransactionRowProps {
  label: string;
  value: React.ReactNode;
}

const TransactionRow: FC<TransactionRowProps> = ({ label, value }) => (
  <Grid container className={styles.gridRow}>
    <Grid size={label === "Paid To" ? 4 : 10} className={styles.leftText}>
      <Typography>{label}</Typography>
    </Grid>
    <Grid
      size={value === "McDonald's ARC" ? 8 : 2}
      className={styles.rightText}
    >
      <Typography>{value}</Typography>
    </Grid>
  </Grid>
);

export default ZoomedInTransaction;

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import commonStyles from "@/styles/common.module.scss";
import styles from "@/styles/cubipay.module.scss";
import { FC, useEffect, useState } from "react";

const transactions = [
  { label: "McDonald's ARC", amount: "14.50" },
  { label: "Send money to John", amount: "-20.00" },
  { label: "Top Up", amount: "200.00", isPositive: true },
];

const TransactionRow: FC<{
  label: string;
  amount: string;
  isPositive?: boolean;
  delay: number;
  zoomEffect?: boolean;
}> = ({ label, amount, isPositive = false, delay, zoomEffect = false }) => (
  <Fade in style={{ transitionDelay: `${delay}ms` }}>
    <Grid container className={styles.transactionRow}>
      <Grid size={8} className={styles.payeeLabel}>
        <Typography
          className={`${styles.text} ${zoomEffect ? styles.zoomEffect : ""}`}
        >
          {label}
        </Typography>
      </Grid>
      <Grid size={3} className={styles.amountLabel}>
        <Typography
          className={`${styles.text} ${zoomEffect ? styles.zoomEffect : ""}`}
          color={isPositive ? "success.main" : "inherit"}
        >
          {amount}
        </Typography>
      </Grid>
      <Grid size={1} className={styles.arrowOption}>
        <ArrowForwardIos
          className={`${styles.arrowForwardIcon} ${
            zoomEffect ? styles.zoomEffect : ""
          }`}
        />
      </Grid>
    </Grid>
  </Fade>
);

interface TransactionHistoryProps {
  onSuccess: () => void;
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({
  onSuccess,
}) => {
  const [zoomEffect, setZoomEffect] = useState(false);

  useEffect(() => {
    const zoomTimeout = setTimeout(() => {
      setZoomEffect(true);
      setTimeout(() => setZoomEffect(false), 600);

      setTimeout(() => {
        onSuccess();
      }, 2000);
    }, transactions.length * 1000);

    return () => {
      clearTimeout(zoomTimeout);
    };
  }, [onSuccess]);

  return (
    <Box className={commonStyles.container}>
      <Card
        className={commonStyles.card}
        variant={"outlined"}
        sx={{
          alignItems: "left",
          justifyContent: "center",
        }}
      >
        <Typography className={styles.transactionHistoryTitle}>
          Wallet Transactions
        </Typography>
        {transactions.map((transaction, index) => (
          <TransactionRow
            key={index}
            delay={index * 1000}
            zoomEffect={index === 0 && zoomEffect}
            {...transaction}
          />
        ))}
      </Card>
    </Box>
  );
};

export default TransactionHistory;

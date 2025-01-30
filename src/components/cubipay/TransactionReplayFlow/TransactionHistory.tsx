import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import commonStyles from "../../../styles/common.module.scss";
import styles from "../../../styles/cubipay.module.scss";
import { useEffect, useState } from "react";

const transactions = [
  { label: "McDonald's ARC", amount: "14.50" },
  { label: "Send money to John", amount: "-20.00" },
  { label: "Top Up", amount: "200.00", isPositive: true },
];

const TransactionRow: React.FC<{
  label: string;
  amount: string;
  isPositive?: boolean;
  delay: number;
  zoomEffect?: boolean;
}> = ({ label, amount, isPositive = false, delay, zoomEffect = false }) => (
  <Fade in style={{ transitionDelay: `${delay}ms` }}>
    <Grid
      container
      className={`${styles.container} ${styles.card} ${styles.transactionRow}`}
    >
      <Grid item xs={8} className={styles.payeeLabel}>
        <Typography
          className={`${styles.text} ${zoomEffect ? styles.zoomEffect : ""}`}
        >
          {label}
        </Typography>
      </Grid>
      <Grid item xs={3} className={styles.amountLabel}>
        <Typography
          className={`${styles.text} ${zoomEffect ? styles.zoomEffect : ""}`}
          color={isPositive ? "success.main" : "inherit"}
        >
          {amount}
        </Typography>
      </Grid>
      <Grid item xs={1} className={styles.arrowOption}>
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
  onSuccess: () => void; // Accept onSuccess prop
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({
  onSuccess,
}) => {
  const [zoomEffect, setZoomEffect] = useState(false);

  useEffect(() => {
    const zoomTimeout = setTimeout(() => {
      setZoomEffect(true);
      setTimeout(() => setZoomEffect(false), 600); // Reset after zoom out and back in

      setTimeout(() => {
        onSuccess();
      }, 2500);
    }, transactions.length * 1000); // Start zoom after all rows fade in

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
        <Typography
          className={`${styles.container} ${styles.card} ${styles.transactionHistoryTitle}`}
        >
          Wallet Transactions
        </Typography>
        {transactions.map((transaction, index) => (
          <TransactionRow
            key={index}
            delay={index * 1000}
            zoomEffect={index === 0 && zoomEffect} // Apply zoom effect to the first row
            {...transaction}
          />
        ))}
      </Card>
    </Box>
  );
};

export default TransactionHistory;

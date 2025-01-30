import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import { useEffect } from "react";
import commonStyles from "../../../styles/common.module.scss";
import styles from "../../../styles/cubipay.module.scss";

interface ZoomedInTransactionProps {
  onSuccess: () => void; // Accept onSuccess prop
}

const ZoomedInTransaction: React.FC<ZoomedInTransactionProps> = ({
  onSuccess,
}) => {
  // Trigger fade-in effect when component is mounted
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeout(() => {
        onSuccess();
      }, 1500);
    }, 100);

    return () => clearTimeout(timer);
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
          className={`${styles.container} ${styles.card} ${styles.transactionDetailsTitle}`}
        >
          Transaction Details
        </Typography>

        <Typography
          className={`${styles.container} ${styles.card} ${styles.transactionAmountData}`}
        >
          SGD&nbsp;
          <span className={styles.amountValue}>14.50</span>
        </Typography>

        <Grid
          container
          className={`${styles.container} ${styles.card} ${styles.gridRow}`}
        >
          <Grid item xs={4} className={styles.leftText}>
            <Typography>Paid To</Typography>
          </Grid>
          <Grid item xs={8} className={styles.rightText}>
            <Typography>McDonald's ARC</Typography>
          </Grid>
        </Grid>

        <Grid
          container
          className={`${styles.container} ${styles.card} ${styles.gridRow}`}
        >
          <Grid item xs={10} className={styles.leftText}>
            <Typography>Request a refund</Typography>
          </Grid>
          <Grid item xs={2} className={styles.rightText}>
            <ArrowForwardIos className={styles.arrowForwardIcon} />
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default ZoomedInTransaction;

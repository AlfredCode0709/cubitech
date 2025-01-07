import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import { useEffect } from "react";
import commonStyles from "../../../styles/common.module.scss";
import styles from "../../../styles/cubipay.module.scss";

const ZoomedInTransaction: React.FC<any> = () => {
  // Trigger fade-in effect when component is mounted
  useEffect(() => {
    const timer = setTimeout(() => {}, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box className={commonStyles.container}>
      <Card className={commonStyles.card} variant={"outlined"}>
        <Typography
          className={`${styles.container} ${styles.card} ${styles.transactionDetailsTitle}`}
        >
          Transaction Details
        </Typography>

        <Typography
          className={`${styles.fadeIn} ${styles.transactionAmountData}`}
        >
          SGD&nbsp;
          <span className={styles.amountValue}>14.50</span>
        </Typography>

        <Grid container className={`${styles.fadeIn} ${styles.gridRow}`}>
          <Grid item xs={4} className={styles.leftText}>
            <Typography>Paid To</Typography>
          </Grid>
          <Grid item xs={8} className={styles.rightText}>
            <Typography>McDonald's ARC</Typography>
          </Grid>
        </Grid>

        <Grid container className={`${styles.fadeIn} ${styles.gridRow}`}>
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

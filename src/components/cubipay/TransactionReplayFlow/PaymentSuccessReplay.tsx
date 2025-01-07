import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CheckCircle from "@mui/icons-material/CheckCircle";
import { useEffect } from "react";
import commonStyles from "../../../styles/common.module.scss";
import styles from "../../../styles/cubipay.module.scss";

const PaymentSuccessReplay: React.FC<any> = () => {
  useEffect(() => {
    const timer = setTimeout(() => {}, 1000); // Initial delay for the animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box className={commonStyles.container}>
      <Card className={commonStyles.card} variant={"outlined"}>
        <Box className={`${styles.container} ${styles.card} ${styles.iconBox}`}>
          <CheckCircle className={styles.checkCircleIcon} />
        </Box>
        <Typography
          className={`${styles.container} ${styles.card} ${styles.successText}`}
        >
          You've Paid
        </Typography>
        <Typography
          className={`${styles.container} ${styles.card} ${styles.amountText}`}
        >
          SGD&nbsp;
          <span className={styles.amountValue}>14.50</span>
        </Typography>

        <Box
          className={`${styles.container} ${styles.card} ${styles.payeeInfo}`}
        >
          <Avatar>M</Avatar>&nbsp;
          <Typography>McDonald's ARC</Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default PaymentSuccessReplay;

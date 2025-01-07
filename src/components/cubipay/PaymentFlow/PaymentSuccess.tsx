import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CheckCircle from "@mui/icons-material/CheckCircle";
import { useEffect } from "react";
import commonStyles from "../../../styles/common.module.scss";
import styles from "../../../styles/cubipay.module.scss";

interface PaymentSuccessProps {
  onSuccess: () => void; // Accept onSuccess prop
}

const PaymentSuccess: React.FC<PaymentSuccessProps> = ({ onSuccess }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeout(() => {
        onSuccess(); // Call onSuccess to reset the flow after display
      }, 1500); // Keep success message visible for 1.5 seconds
    }, 100); // Initial delay for the animation
    return () => clearTimeout(timer);
  }, [onSuccess]);

  return (
    <Box className={commonStyles.container}>
      <Card
        className={commonStyles.card}
        variant={"outlined"}
        sx={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box className={`${styles.container} ${styles.card} ${styles.iconBox}`}>
          <CheckCircle className={styles.checkCircleIcon} />
        </Box>
        <Typography
          className={`${styles.container} ${styles.card} ${styles.successText}`}
        >
          Payment Success
        </Typography>
        <Typography
          className={`${styles.container} ${styles.card} ${styles.amountText}`}
        >
          SGD&nbsp;
          <span className={styles.amountValue}>9.99</span>
        </Typography>

        <Box
          className={`${styles.container} ${styles.card} ${styles.userInfo}`}
        >
          <Avatar>J</Avatar>&nbsp;
          <Typography>John Doe</Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default PaymentSuccess;

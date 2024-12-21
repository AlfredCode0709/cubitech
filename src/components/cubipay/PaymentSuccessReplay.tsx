import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CheckCircle from "@mui/icons-material/CheckCircle";
import { useEffect } from "react";
import styles from "../../styles/cubipay.module.scss";

interface PaymentSuccessProps {
  onSuccess: () => void; // Accept onSuccess prop
}

const PaymentSuccessReplay: React.FC<PaymentSuccessProps> = ({ onSuccess }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeout(() => {
        onSuccess(); // Call onSuccess to reset the flow after display
      }, 2000); // Keep success message visible for 2 seconds
    }, 100); // Initial delay for the animation
    return () => clearTimeout(timer);
  }, [onSuccess]);

  return (
    <Box className={styles.container}>
      <Card className={styles.card} variant={"outlined"}>
        <Box className={styles.iconBox}>
          <CheckCircle className={styles.checkCircleIcon}/>
        </Box>
        <Typography className={styles.successText}>
          You've Paid
        </Typography>
        <Typography className={styles.amountText}>
          SGD&nbsp;
          <span className={styles.amountValue}>14.50</span>
        </Typography>

        <Box className={styles.payeeInfo}>
          <Avatar>M</Avatar>&nbsp;
          <Typography>McDonald's ARC</Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default PaymentSuccessReplay;

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CheckCircle from "@mui/icons-material/CheckCircle";
import commonStyles from "@/styles/common.module.scss";
import styles from "@/styles/cubipay.module.scss";
import { FC, useEffect } from "react";

interface PaymentSuccessProps {
  onSuccess: () => void;
}

const PaymentSuccess: FC<PaymentSuccessProps> = ({ onSuccess }) => {
  useEffect(() => {
    const timer = setTimeout(onSuccess, 1600);
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
        <Box className={styles.iconBox}>
          <CheckCircle className={styles.checkCircleIcon} />
        </Box>
        <Typography className={styles.successText}>Payment Success</Typography>
        <Typography className={styles.amountText}>
          SGD&nbsp;
          <span className={styles.amountValue}>9.99</span>
        </Typography>

        <Box className={styles.userInfo}>
          <Avatar>J</Avatar>&nbsp;
          <Typography>John Doe</Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default PaymentSuccess;

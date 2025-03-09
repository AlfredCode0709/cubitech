import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CheckCircle from "@mui/icons-material/CheckCircle";
import commonStyles from "../../../styles/common.module.scss";
import styles from "../../../styles/cubipay.module.scss";
import { FC, useEffect } from "react";

interface PaymentSuccessReplayProps {
  onSuccess: () => void;
}

const PaymentSuccessReplay: FC<PaymentSuccessReplayProps> = ({ onSuccess }) => {
  useEffect(() => {
    const timer = setTimeout(onSuccess, 3500);
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
        <Typography className={styles.successText}>You've Paid</Typography>
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

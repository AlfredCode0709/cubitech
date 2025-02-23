import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "../../styles/checkout.module.scss";
import { FC } from "react";

const PaymentMethodOption: FC<any> = () => {
  return (
    <Box className={styles.paymentMethodOption}>
      <Typography className={styles.heading}>Select Payment Method</Typography>
    </Box>
  );
};

export default PaymentMethodOption;

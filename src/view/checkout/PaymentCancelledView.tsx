import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "@/styles/checkout.module.scss";
import { FC } from "react";

const PaymentCancelledView: FC = () => {
  return (
    <Box className={styles.paymentCancelledDisplay}>
      <Avatar
        className={styles.avatar}
        alt="Payment Cancelled"
        src={
          "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1740483513/payment_cancelled_azppgl.svg"
        }
        variant={"square"}
      />
      <Typography className={styles.title}>
        Your Payment Is Cancelled
      </Typography>
      <Typography className={styles.subtitle}>
        Your payment was not completed. You can retry the payment or contact
        support for help.
      </Typography>
      <Box className={styles.buttonGroup}>
        <Button className={styles.button} size={"large"} href={"/checkout"}>
          Back to Checkout
        </Button>
      </Box>
    </Box>
  );
};

export default PaymentCancelledView;

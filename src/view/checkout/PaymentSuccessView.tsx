import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "@/styles/checkout.module.scss";
import { FC } from "react";

const PaymentSuccessView: FC = () => {
  return (
    <Box className={styles.paymentSuccessDisplay}>
      <Avatar
        className={styles.avatar}
        alt="Payment Success"
        src={
          "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1740485477/payment_success_z0k2wv.svg"
        }
        variant={"square"}
      />
      <Typography className={styles.title}>
        Your Payment Is Successful
      </Typography>
      <Typography className={styles.subtitle}>
        Your payment has been processed successfully. You can view your order
        details in the order tab.
      </Typography>
      <Box className={styles.buttonGroup}>
        <Button color={'info'} size={"large"} href={"/"}>
          Go to Home
        </Button>
        <Button className={styles.button1} size={"large"} href={"/cubifood"}>
          Shop With CubiFood
        </Button>
        <Button className={styles.button2} size={"large"} href={"/cubimart"}>
          Shop With CubiMart
        </Button>
      </Box>
    </Box>
  );
};

export default PaymentSuccessView;

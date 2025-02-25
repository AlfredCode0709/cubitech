import Head from "next/head";
import commonStyles from "../styles/common.module.scss";
import { FC } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const PaymentSuccess: FC<any> = () => {
  return (
    <>
      <Head>
        <title>Payment Success</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dcsfz2ydj/image/upload/v1739968314/cubitech_pv5rz0.ico"
        />
      </Head>
      <main>
        <Box className={commonStyles.paymentSuccessDisplay}>
          <Avatar
            className={commonStyles.avatar}
            alt="Payment Success"
            src={
              "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1740485477/payment_success_z0k2wv.svg"
            }
            variant={"square"}
          />
          <Typography className={commonStyles.title}>
            Your Payment Is Successful
          </Typography>
          <Typography className={commonStyles.subtitle}>
            Your payment has been processed successfully. You can view your
            order details in the order tab.
          </Typography>
          <Box className={commonStyles.buttonGroup}>
            <Button className={commonStyles.button} size={"large"} href={"/"}>
              Go to Home
            </Button>
            <Button className={commonStyles.button} size={"large"} href={"/cubifood"}>
              Continue Shopping
            </Button>
          </Box>
        </Box>
      </main>
    </>
  );
};

export default PaymentSuccess;

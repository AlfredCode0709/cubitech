import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import commonStyles from "../../styles/checkout.module.scss";
import Head from 'next/head';
import { FC } from "react";

const PaymentCancelled: FC<any> = () => {
  return (
    <>
      <Head>
        <title>Payment Cancelled</title>
        <meta name="description" content="Cubitech - Next Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dcsfz2ydj/image/upload/v1739968314/cubitech_pv5rz0.ico"
        />
      </Head>
      <main>
        <Box className={commonStyles.paymentCancelledDisplay}>
          <Avatar
            className={commonStyles.avatar}
            alt="Payment Cancelled"
            src={
              "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1740483513/payment_cancelled_azppgl.svg"
            }
            variant={"square"}
          />
          <Typography className={commonStyles.title}>
            Your Payment Is Cancelled
          </Typography>
          <Typography className={commonStyles.subtitle}>
            Your payment was not completed. You can retry the payment or contact
            support for help.
          </Typography>
          <Box className={commonStyles.buttonGroup}>
            <Button
              className={commonStyles.button}
              size={"large"}
              href={"/checkout"}
            >
              Back to Checkout
            </Button>
          </Box>
        </Box>
      </main>
    </>
  );
};

export default PaymentCancelled;

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import commonStyles from "@/styles/common.module.scss";
import styles from "@/styles/cubipay.module.scss";
import { FC, useEffect, useState } from "react";

interface PaymentAmountAutoInputProps {
  onSuccess: () => void;
}

const PaymentAmountAutoInput: FC<PaymentAmountAutoInputProps> = ({
  onSuccess,
}) => {
  const [displayedAmount, setDisplayedAmount] = useState("0.00");
  const [isSlideStart, setIsSlideStart] = useState(false);
  const [sendOpacity, setSendOpacity] = useState(1); 

  useEffect(() => {
    let index = 0;
    const interval = 300;
    const sequence = ["0.00", "0.09", "0.99", "9.99"]; 

    const typingAnimation = setInterval(() => {
      if (index < sequence.length) {
        setDisplayedAmount(sequence[index]);
        index++;
      } else {
        clearInterval(typingAnimation);
        setTimeout(() => {
          setSendOpacity(0);
          setTimeout(() => {
            setIsSlideStart(true);
            setTimeout(onSuccess, 750);
          }, 1000);
        }, 1750);
      }
    }, interval);

    return () => clearInterval(typingAnimation);
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
        <Box className={styles.typingText}>
          SGD&nbsp;
          <span className={styles.amountText}>{displayedAmount}</span>
        </Box>

        <Card className={styles.userCard} elevation={1}>
          <Avatar>J</Avatar>
          &nbsp;
          <Typography>John Doe</Typography>
        </Card>

        <Box className={styles.sendButton}>
          <Typography className={styles.sendText} sx={{ opacity: sendOpacity }}>
            Send
          </Typography>
          <Box
            className={`${styles.arrowBox} ${
              isSlideStart ? styles.arrowSlide : ""
            }`}
          >
            <ArrowForwardIosIcon className={styles.arrowForwardIcon} />
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default PaymentAmountAutoInput;

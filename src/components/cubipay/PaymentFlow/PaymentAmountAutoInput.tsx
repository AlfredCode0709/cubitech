import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useEffect, useState } from "react";
import commonStyles from "../../../styles/common.module.scss";
import styles from "../../../styles/cubipay.module.scss";

interface PaymentAmountAutoInputProps {
  onSuccess: () => void; // Accept onSuccess prop
}

const PaymentAmountAutoInput: React.FC<PaymentAmountAutoInputProps> = ({
  onSuccess,
}) => {
  const typingSequence = ["0.00", "0.09", "0.99", "9.99"];
  const [displayedAmount, setDisplayedAmount] = useState("0.00");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isSlideStart, setIsSlideStart] = useState(false);
  const [sendOpacity, setSendOpacity] = useState(1); // New state for opacity

  useEffect(() => {
    let index = 0;
    const interval = 300;

    const typingAnimation = setInterval(() => {
      if (index < typingSequence.length) {
        setDisplayedAmount(typingSequence[index]);
        index++;
      } else {
        clearInterval(typingAnimation);
        setIsTypingComplete(true);
        setTimeout(() => {
          setSendOpacity(0); // Set opacity to 0
          setTimeout(() => {
            setIsSlideStart(true); // Trigger slide after the opacity transition
            // Call onSuccess when typing is complete
            setTimeout(onSuccess, 500); // Delay for visual effect
          }, 500); // Slide animation starts after 1 second
        }, 500);
      }
    }, interval);

    return () => clearInterval(typingAnimation);
  }, [onSuccess]);

  return (
    <Box className={commonStyles.container}>
      <Card className={commonStyles.card} variant={"outlined"}>
        <Box
          className={`${styles.container} ${styles.card} ${styles.typingText}`}
        >
          SGD&nbsp;
          <span className={styles.amountText}>{displayedAmount}</span>
        </Box>

        <Card
          className={`${styles.container} ${styles.card} ${styles.userCard}`}
          elevation={1}
        >
          <Avatar>J</Avatar>
          &nbsp;
          <Typography>John Doe</Typography>
        </Card>

        <Box
          className={`${styles.container} ${styles.card} ${styles.sendButton}`}
        >
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
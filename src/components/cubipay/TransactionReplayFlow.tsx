import Box from "@mui/material/Box";
import PaymentSuccessReplay from "./PaymentSuccessReplay";
import TransactionHistory from "./TransactionHistory";
import ZoomedInTransaction from "./ZoomedInTransaction";
import { useState } from "react";
import styles from '../../styles/cubipay.module.scss';

const TransactionReplayFlow: React.FC<any> = () => {
  const [step, setStep] = useState(0);

  // Function to handle the successful completion of a step
  const handleSuccess = () => {
    if (step < 2) {
      setStep(step + 1); // Move to the next step
    } else {
      setStep(0); // Reset to the first step after success
    }
  };

  return (
    <Box className={styles.transactionFlowBlock}>
      {step === 0 && <PaymentSuccessReplay onSuccess={handleSuccess} />}
      {step === 1 && <TransactionHistory onSuccess={handleSuccess} />}
      {step === 2 && <ZoomedInTransaction onSuccess={handleSuccess} />}
    </Box>
  );
};

export default TransactionReplayFlow;

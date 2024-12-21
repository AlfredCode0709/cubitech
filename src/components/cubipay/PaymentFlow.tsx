import Box from "@mui/material/Box";
import PaymentAmountAutoInput from "./PaymentAmountAutoInput";
import PaymentSuccess from "./PaymentSuccess";
import QRCodeScanning from "./QRCodeScanning";
import { useState } from "react";
import styles from '../../styles/cubipay.module.scss';

const PaymentFlow: React.FC<any> = () => {
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
    <Box className={styles.paymentFlowBlock}>
      {step === 0 && <QRCodeScanning onSuccess={handleSuccess} />}
      {step === 1 && <PaymentAmountAutoInput onSuccess={handleSuccess} />}
      {step === 2 && <PaymentSuccess onSuccess={handleSuccess} />}
    </Box>
  );
};

export default PaymentFlow;

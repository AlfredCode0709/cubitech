import Box from "@mui/material/Box";
import PaymentAmountAutoInput from "./PaymentAmountAutoInput";
import PaymentSuccess from "./PaymentSuccess";
import QRCodeScanning from "./QRCodeScanning";
import commonStyles from "../../../styles/common.module.scss";
import { FC, useState } from "react";

const PaymentFlow: FC<any> = () => {
  const [step, setStep] = useState(0);

  const handleSuccess = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      setStep(0);
    }
  };

  return (
    <Box className={commonStyles.paymentFlow}>
      {step === 0 && <QRCodeScanning onSuccess={handleSuccess} />}
      {step === 1 && <PaymentAmountAutoInput onSuccess={handleSuccess} />}
      {step === 2 && <PaymentSuccess onSuccess={handleSuccess} />}
    </Box>
  );
};

export default PaymentFlow;

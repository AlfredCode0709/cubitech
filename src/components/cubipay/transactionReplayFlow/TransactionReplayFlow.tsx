import Box from "@mui/material/Box";
import PaymentSuccessReplay from "./PaymentSuccessReplay";
import TransactionHistory from "./TransactionHistory";
import ZoomedInTransaction from "./ZoomedInTransaction";
import commonStyles from "@/styles/common.module.scss";
import { FC, useState } from "react";

const TransactionReplayFlow: FC = () => {
  const [step, setStep] = useState(0);

  const handleSuccess = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      setStep(0);
    }
  };

  return (
    <Box className={commonStyles.transactionReplayFlow}>
      {step === 0 && <PaymentSuccessReplay onSuccess={handleSuccess} />}
      {step === 1 && <TransactionHistory onSuccess={handleSuccess} />}
      {step === 2 && <ZoomedInTransaction onSuccess={handleSuccess} />}
    </Box>
  );
};

export default TransactionReplayFlow;

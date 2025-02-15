import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import QrCodeScanner from "@mui/icons-material/QrCodeScanner";
import commonStyles from "../../../styles/common.module.scss";
import styles from "../../../styles/cubipay.module.scss";
import { FC, useEffect, useState } from "react";

interface QRCodeScanningProps {
  onSuccess: () => void;
}

const QRCodeScanning: FC<QRCodeScanningProps> = ({ onSuccess }) => {
  useEffect(() => {
    const timer = setTimeout(onSuccess, 3500);
    return () => clearTimeout(timer);
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
        <Box className={`${styles.qrContainer} ${styles.zoomAnimation}`}>
          <QrCodeScanner className={styles.qrIcon} />
          <Box className={styles.scanningShadow} />
        </Box>
        <Typography className={styles.scanningText}>Scanning</Typography>
      </Card>
    </Box>
  );
};

export default QRCodeScanning;

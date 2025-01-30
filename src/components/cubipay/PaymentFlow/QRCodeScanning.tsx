import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import QrCodeScanner from "@mui/icons-material/QrCodeScanner";
import { useEffect, useState } from "react";
import commonStyles from "../../../styles/common.module.scss";
import styles from "../../../styles/cubipay.module.scss";

interface QRCodeScanningProps {
  onSuccess: () => void; // Accept onSuccess prop
}

const QRCodeScanning: React.FC<QRCodeScanningProps> = ({ onSuccess }) => {
  const [zoomCompleted, setZoomCompleted] = useState(false);

  // Trigger shadow animation 2 seconds after component mounts (after zoom completes)
  useEffect(() => {
    const zoomTimer = setTimeout(() => {
      setZoomCompleted(true);
      // Simulate successful scanning after zoom
      setTimeout(() => {
        onSuccess(); // Call onSuccess when scanning is done
      }, 2500); // Delay to simulate scanning process
    }, 2000); // Delay for zoom effect
    return () => clearTimeout(zoomTimer);
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
        {/* Container for QR Code and scanning shadow overlay */}
        <Box
          className={`${styles.container} ${styles.card} ${
            styles.qrContainer
          } ${zoomCompleted ? styles.zoomCompleted : ""}`}
        >
          {/* QR Code Icon */}
          <QrCodeScanner className={styles.qrIcon} />
          {/* Darker Scanning Shadow Overlay - Only animates after zoom is complete */}
          {zoomCompleted && <Box className={styles.scanningShadow} />}
        </Box>

        {/* Scanning Text */}
        <Typography
          className={`${styles.container} ${styles.card} ${styles.scanningText}`}
        >
          Scanning
        </Typography>
      </Card>
    </Box>
  );
};

export default QRCodeScanning;

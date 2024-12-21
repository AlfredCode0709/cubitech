import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { keyframes } from "@mui/material/styles";
import { useEffect, useState } from "react";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px); // Slight upward movement
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const transactions = [
  { label: "McDonald's ARC", amount: "14.50" },
  { label: "Send money to John", amount: "-20.00" },
  { label: "Top Up", amount: "200.00", isPositive: true },
];

const TransactionRow: React.FC<{
  label: string;
  amount: string;
  isPositive?: boolean;
  delay: number;
  zoomEffect?: boolean;
}> = ({ label, amount, isPositive = false, delay, zoomEffect = false }) => (
  <Fade in style={{ transitionDelay: `${delay}ms` }}>
    <Grid container paddingY="7.5%" borderBottom={1} borderColor="#d9d9d9">
      <Grid item xs={8} textAlign="left">
        <Typography
          sx={{
            transform: zoomEffect ? "scale(0.9)" : "scale(1)",
            transition: zoomEffect
              ? "transform 0.3s ease-out, transform 0.3s ease-in 0.3s"
              : "transform 0.3s ease",
          }}
        >
          {label}
        </Typography>
      </Grid>
      <Grid item xs={3} textAlign="right">
        <Typography
          fontWeight={700}
          color={isPositive ? "success.main" : "inherit"}
          sx={{
            transform: zoomEffect ? "scale(0.9)" : "scale(1)",
            transition: zoomEffect
              ? "transform 0.3s ease-out, transform 0.3s ease-in 0.3s"
              : "transform 0.3s ease",
          }}
        >
          {amount}
        </Typography>
      </Grid>
      <Grid item xs={1} textAlign="right">
        <ArrowForwardIos
          sx={{
            color: "#666666",
            fontSize: 14,
            transform: zoomEffect ? "scale(0.9)" : "scale(1)",
            transition: zoomEffect
              ? "transform 0.3s ease-out, transform 0.3s ease-in 0.3s"
              : "transform 0.3s ease",
          }}
        />
      </Grid>
    </Grid>
  </Fade>
);

interface TransactionHistoryProps {
  onSuccess: () => void; // Accept onSuccess prop
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({
  onSuccess,
}) => {
  const [zoomEffect, setZoomEffect] = useState(false);

  useEffect(() => {
    const zoomTimeout = setTimeout(() => {
      setZoomEffect(true);
      setTimeout(() => setZoomEffect(false), 600); // Reset after zoom out and back in

      setTimeout(() => {
        onSuccess();
      }, 1000);
    }, transactions.length * 1000); // Start zoom after all rows fade in

    return () => {
      clearTimeout(zoomTimeout);
    };
  }, [onSuccess]);

  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      paddingY="2.5%"
    >
      <Card
        variant="outlined"
        sx={{
          padding: "5%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          height: "300px",
          width: "300px",
        }}
      >
        <Typography
          fontWeight={600}
          marginBottom="7.5%"
          sx={{
            animation: `${fadeIn} 0.5s ease-out`,
            transition: "opacity 0.5s",
          }}
        >
          Wallet Transactions
        </Typography>
        {transactions.map((transaction, index) => (
          <TransactionRow
            key={index}
            delay={index * 1000}
            zoomEffect={index === 0 && zoomEffect} // Apply zoom effect to the first row
            {...transaction}
          />
        ))}
      </Card>
    </Box>
  );
};

export default TransactionHistory;

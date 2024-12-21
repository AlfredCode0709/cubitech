import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { keyframes } from "@mui/material/styles";

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

interface ZoomedInTransactionProps {
  onSuccess: () => void; // Accept onSuccess prop
}

const ZoomedInTransaction: React.FC<ZoomedInTransactionProps> = ({
  onSuccess,
}) => {
  // Trigger fade-in effect when component is mounted
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeout(() => {
        onSuccess();
      }, 2000);
    }, 100);

    return () => clearTimeout(timer);
  }, [onSuccess]);

  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      paddingY={"2.3%"}
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
          Transaction Details
        </Typography>

        <Typography
          display={"flex"}
          justifyContent={"right"}
          sx={{
            animation: `${fadeIn} 0.5s ease-out`,
            transition: "opacity 0.5s",
          }}
        >
          SGD&nbsp;
          <span style={{ fontSize: 40, fontWeight: 500 }}>14.50</span>
        </Typography>

        <Grid
          container
          paddingY={"7.5%"}
          borderBottom={1}
          borderColor={"#d9d9d9"}
          sx={{
            animation: `${fadeIn} 0.5s ease-out`,
            transition: "opacity 0.5s",
          }}
        >
          <Grid item xs={4} textAlign="left">
            <Typography color={"#666666"}>Paid To</Typography>
          </Grid>
          <Grid item xs={8} textAlign="right">
            <Typography fontWeight={700}>McDonald's ARC</Typography>
          </Grid>
        </Grid>

        <Grid
          container
          paddingY={"7.5%"}
          borderBottom={1}
          borderColor={"#d9d9d9"}
          sx={{
            animation: `${fadeIn} 0.5s ease-out`,
            transition: "opacity 0.5s",
          }}
        >
          <Grid item xs={10} textAlign="left">
            <Typography>Request a refund</Typography>
          </Grid>
          <Grid item xs={2} textAlign="right">
            <ArrowForwardIos sx={{ color: "#666666", fontSize: 16 }} />
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default ZoomedInTransaction;

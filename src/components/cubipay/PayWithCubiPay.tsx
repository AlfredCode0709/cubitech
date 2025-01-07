import ArrowForward from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import commonStyles from "../../styles/common.module.scss";

const PayWithCubiPay: React.FC<any> = () => {
  return (
    <Box className={commonStyles.joinSection}>
      <Grid container className={commonStyles.gridContainer}>
        <Grid item xs={9} className={commonStyles.leftGrid}>
          <Typography className={commonStyles.title}>
            Pay with CubiPay
          </Typography>
          <Typography className={commonStyles.subtitle}>
            The faster, easier way to pay. Swipe on your phone to earn CubiPerk
            points and redeem discounts on Cubitech services, partner rewards,
            and more.
          </Typography>
        </Grid>
        <Grid item xs={3} className={commonStyles.rightGrid}>
          <Button
            startIcon={<ArrowForward />}
            color={"primary"}
            variant={"contained"}
            size={"large"}
          >
            Start Using CubiPay
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PayWithCubiPay;

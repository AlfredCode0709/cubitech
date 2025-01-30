import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import styles from "../../styles/cubiperk.module.scss";

const rewardItems = [
  {
    conditionDescr1: (
      <React.Fragment>
        Paying for&nbsp;
        <Typography className={styles.cubiRide}>
          CUBI
          <span className={styles.subColor}>Ride</span>
        </Typography>
        &nbsp;and deliveries
      </React.Fragment>
    ),
    conditionDescr2: (
      <React.Fragment>
        using&nbsp;
        <Typography className={styles.cubiPay}>
          CUBI
          <span className={styles.subColor1}>Pay</span>
          <span className={styles.subColor2}>Later</span>
        </Typography>
        &nbsp;or&nbsp;
        <Typography className={styles.cubiPay}>
          CUBI
          <span className={styles.subColor1}>Pay</span>
        </Typography>
        &nbsp;Wallet
      </React.Fragment>
    ),
    rewardsDescr: "0.75% back",
  },
  {
    conditionDescr1: (
      <React.Fragment>
        Postpaid / Instalment payments at
        <br />
        our merchant partners
      </React.Fragment>
    ),
    conditionDescr2: (
      <React.Fragment>
        using&nbsp;
        <Typography className={styles.cubiPay}>
          CUBI
          <span className={styles.subColor1}>Pay</span>
          <span className={styles.subColor2}>Later</span>
        </Typography>
      </React.Fragment>
    ),
    rewardsDescr: "0.75% back",
  },
  {
    conditionDescr1: (
      <React.Fragment>Online payments at merchant partners</React.Fragment>
    ),
    conditionDescr2: (
      <React.Fragment>
        using&nbsp;
        <Typography className={styles.cubiPay}>
          CUBI
          <span className={styles.subColor1}>Pay</span>
        </Typography>
        &nbsp;Wallet
      </React.Fragment>
    ),
    rewardsDescr: (
      <React.Fragment>
        <Box className={styles.box}>
          0.6% or more back
          <Typography className={styles.subtitle} component={"div"}>
            + a chance to get up to 26,888 points
          </Typography>
        </Box>
      </React.Fragment>
    ),
  },
  {
    conditionDescr1: <React.Fragment>Scan-to-pay</React.Fragment>,
    conditionDescr2: (
      <React.Fragment>
        using&nbsp;
        <Typography className={styles.cubiPay}>
          CUBI
          <span className={styles.subColor1}>Pay</span>
        </Typography>
        &nbsp;in-store*
      </React.Fragment>
    ),
    rewardsDescr: (
      <React.Fragment>
        A chance to get up
        <br />
        to 26,888 points
      </React.Fragment>
    ),
  },
];

const RewardsTable: React.FC<any> = () => {
  return (
    <Box className={styles.rewardsTable}>
      <Typography className={styles.title}>
        Earn rewards with every transaction using your CubiPay Wallet or
        CubiPayLater
      </Typography>

      <Box className={styles.infoBox}>
        <Grid container className={styles.gridContainer} spacing={2}>
          <Grid item xs={6}>
            <Typography className={styles.header}>How you pay</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography className={styles.header}>What you earn</Typography>
          </Grid>

          {rewardItems.map((item, index) => (
            <React.Fragment key={index}>
              <Grid item xs={6} className={styles.rewardGridItem}>
                <Box className={styles.leftBox}>
                  <Typography
                    className={styles.conditionDescr1}
                    component={"div"}
                  >
                    {item.conditionDescr1}
                  </Typography>
                  <Typography
                    className={styles.conditionDescr2}
                    component={"div"}
                  >
                    {item.conditionDescr2}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} className={styles.rewardGridItem}>
                <Box className={styles.rightBox}>
                  <Typography className={styles.rewardsDescr} component={"div"}>
                    {item.rewardsDescr}
                  </Typography>
                </Box>
              </Grid>
            </React.Fragment>
          ))}

          <Grid item xs={12}>
            <Typography className={styles.note}>
              CubiPay in-store is applicable to QR transactions (excluding
              PayNow) with a minimum spend of $3 after promotions and/or
              discounts applied.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default RewardsTable;

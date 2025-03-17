import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "@/styles/cubiperk.module.scss";
import { Fragment } from "react";

const rewardItems = [
  {
    conditionDescr1: (
      <Fragment>
        Paying for&nbsp;
        <Typography className={styles.cubiRide}>
          CUBI<span className={styles.subColor}>Ride</span>
        </Typography>
        &nbsp;and deliveries
      </Fragment>
    ),
    conditionDescr2: (
      <Fragment>
        using&nbsp;
        <Typography className={styles.cubiPay}>
          CUBI<span className={styles.subColor1}>Pay</span>
          <span className={styles.subColor2}>Later</span>
        </Typography>
        &nbsp;or&nbsp;
        <Typography className={styles.cubiPay}>
          CUBI<span className={styles.subColor1}>Pay</span>
        </Typography>
        &nbsp;Wallet
      </Fragment>
    ),
    rewardsDescr: "0.75% back",
  },
  {
    conditionDescr1: (
      <Fragment>
        Postpaid / Instalment payments at
        <br />
        our merchant partners
      </Fragment>
    ),
    conditionDescr2: (
      <Fragment>
        using&nbsp;
        <Typography className={styles.cubiPay}>
          CUBI<span className={styles.subColor1}>Pay</span>
          <span className={styles.subColor2}>Later</span>
        </Typography>
      </Fragment>
    ),
    rewardsDescr: "0.75% back",
  },
  {
    conditionDescr1: <Fragment>Online payments at merchant partners</Fragment>,
    conditionDescr2: (
      <Fragment>
        using&nbsp;
        <Typography className={styles.cubiPay}>
          CUBI<span className={styles.subColor1}>Pay</span>
        </Typography>
        &nbsp;Wallet
      </Fragment>
    ),
    rewardsDescr: (
      <Fragment>
        <Box className={styles.box}>
          0.6% or more back
          <Typography className={styles.subtitle} component={"div"}>
            + a chance to get up to 26,888 points
          </Typography>
        </Box>
      </Fragment>
    ),
  },
  {
    conditionDescr1: <Fragment>Scan-to-pay</Fragment>,
    conditionDescr2: (
      <Fragment>
        using&nbsp;
        <Typography className={styles.cubiPay}>
          CUBI<span className={styles.subColor1}>Pay</span>
        </Typography>
        &nbsp;in-store*
      </Fragment>
    ),
    rewardsDescr: (
      <Fragment>
        A chance to get up
        <br />
        to 26,888 points
      </Fragment>
    ),
  },
];

export default rewardItems;

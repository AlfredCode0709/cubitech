import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import CubiPerkEarnings from "./CubiPerkEarnings";
import TopUpMethods from "./TopUpMethods";
import styles from "@/styles/cubiperk.module.scss";
import { FC } from "react";

const UsageTable: FC = () => (
  <Box className={styles.usageTable}>
    <Typography className={styles.title}>
      Top Up, Spend, Earn Points!
    </Typography>

    <Typography className={styles.subtitle} component={"div"}>
      The more you use CubiPay Wallet (including&nbsp;
      <Typography className={styles.cubiPayLater} component={"span"}>
        CUBI<span className={styles.subColor1}>Pay</span>
        <span className={styles.subColor2}>Later</span>
      </Typography>
      ), the easier it is to go cashless.
    </Typography>

    <Typography className={styles.subtitle}>
      Here{`'`}s a quick overview of what you can do online and offline.
    </Typography>

    <Grid
      container
      className={styles.gridContainer}
      columnSpacing={2}
      rowSpacing={4}
    >
      <TopUpMethods />
      <CubiPerkEarnings />
    </Grid>
  </Box>
);

export default UsageTable;

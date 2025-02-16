import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import AccountInfoCard from "./AccountInfoCard";
import ServiceShortcuts from "./ServiceShortcuts";
import styles from "../../styles/index.module.scss";
import { FC, Fragment } from "react";

const accountInfoCards = [
  {
    title: (
      <Fragment>
        <span className={styles.cubiPay}>
          CUBI<span className={styles.subColor1}>Pay</span>
        </span>
        &nbsp;Wallet
      </Fragment>
    ),
    value: "S$9999.99",
  },
  {
    title: (
      <Fragment>
        <span className={styles.cubiPerk}>
          CUBI<span className={styles.subColor2}>Perk</span>
        </span>
        &nbsp;Points
      </Fragment>
    ),
    value: "99999",
  },
];

const UserDashboard: FC<any> = () => (
  <Box className={styles.userDashboard}>
    <Grid container spacing={2} rowSpacing={4}>
      <Grid size={8}>
        <Box className={styles.infographicBox} />
      </Grid>
      <Grid size={4} className={styles.accountInfo}>
        {accountInfoCards.map((card, index) => (
          <AccountInfoCard
            key={index}
            title={card.title}
            value={card.value}
            marginTop={index !== 0}
          />
        ))}
      </Grid>
      <ServiceShortcuts />
    </Grid>
  </Box>
);

export default UserDashboard;

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import styles from "@/styles/cubiperk.module.scss";
import { FC, Fragment, JSX } from "react";

interface TopUpMethod {
  subtitle: JSX.Element | string;
}

const topUpMethods: TopUpMethod[] = [
  {
    subtitle: (
      <Fragment>
        Top up using <strong>PayNow</strong>
      </Fragment>
    ),
  },
  {
    subtitle: (
      <Fragment>
        Top up from your
        <br />
        bank <strong>via FAST</strong>
      </Fragment>
    ),
  },
  { subtitle: "Top up using debit/credit cards" },
];

const TopUpMethods: FC = () => (
  <Fragment>
    <Grid size={12}>
      <Typography className={styles.title}>
        Enjoy zero fees on all top-ups!
      </Typography>
    </Grid>

    {topUpMethods.map((method, index) => (
      <Grid size={4} key={index} className={styles.topUpMethodGrid}>
        <Box className={styles.box}>
          <Typography className={styles.text}>{method.subtitle}</Typography>
        </Box>
      </Grid>
    ))}
  </Fragment>
);

export default TopUpMethods;

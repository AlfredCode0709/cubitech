import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MonthCycle from "./MonthCycle";
import PerkItems from "./PerkItems";
import styles from "../../styles/cubiperk.module.scss";
import { FC } from "react";

const HacksTable: FC<any> = () => {
  return (
    <Box className={styles.hacksTable}>
      <Typography className={styles.title}>
        Earning Points Is Just the Start — Here’s How to Redeem Them!
      </Typography>

      <PerkItems />

      <Typography className={styles.heading6_descr}>
        Open your Cubitech app now to discover what’s waiting for you!
      </Typography>

      <Typography className={styles.heading3_descr}>
        Finally, here’s the highlight...
      </Typography>

      <Typography className={styles.heading5_descr}>
        Your points will not expire!
      </Typography>

      <Typography className={styles.heading5_descr}>
        As long as you complete at least one points-earning transaction each
        month*, your points will remain valid for an additional 9 months.
      </Typography>

      <MonthCycle />

      <Typography className={styles.example_descr}>
        If you make a transaction in January, your points remain valid until the
        end of September
        <br />— nine months from the month of your transaction.
      </Typography>

      <Typography className={styles.example_descr}>
        If you make another transaction in February, your points validity shifts
        to the end of October,
        <br />
        extending the period by one month.
      </Typography>

      <Typography className={styles.noticeText}>
        We’re constantly improving CubiPerk to keep it relevant for you.
        <br />
        Check back often to see how we’re making your everyday transactions more
        rewarding.
      </Typography>
    </Box>
  );
};

export default HacksTable;

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import styles from "@/styles/cubiperk.module.scss";
import { FC, JSX } from "react";

interface RewardItemProps {
  conditionDescr1: JSX.Element;
  conditionDescr2: JSX.Element;
  rewardsDescr: JSX.Element | string;
}

const RewardItem: FC<RewardItemProps> = ({
  conditionDescr1,
  conditionDescr2,
  rewardsDescr,
}) => {
  return (
    <>
      <Grid size={6} className={styles.rewardGridItem}>
        <Box className={styles.leftBox}>
          <Typography className={styles.conditionDescr1} component={"div"}>
            {conditionDescr1}
          </Typography>
          <Typography className={styles.conditionDescr2} component={"div"}>
            {conditionDescr2}
          </Typography>
        </Box>
      </Grid>
      <Grid size={6} className={styles.rewardGridItem}>
        <Box className={styles.rightBox}>
          <Typography className={styles.rewardsDescr} component={"div"}>
            {rewardsDescr}
          </Typography>
        </Box>
      </Grid>
    </>
  );
};

export default RewardItem;

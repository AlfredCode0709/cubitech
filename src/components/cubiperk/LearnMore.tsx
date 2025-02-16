import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import LearnMoreImage from "./LearnMoreImage";
import LearnMoreContent from "./LearnMoreContent";
import styles from "../../styles/cubiperk.module.scss";
import { FC } from "react";

const LearnMore: FC = () => {
  return (
    <Box className={styles.learnMore}>
      <Grid container className={styles.gridContainer}>
        <Grid size={6} className={styles.leftGrid}>
          <LearnMoreImage src="/cubiperk/block2.svg" alt="CubiPerk" />
        </Grid>
        <Grid size={6}>
          <LearnMoreContent />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LearnMore;

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import TreasureCard from "./TreasureCard";
import styles from "@/styles/cubifood.module.scss";
import { FC } from "react";

const Treasures: FC = () => {
  return (
    <Box className={styles.treasures}>
      <Typography className={styles.title}>Top Treasures</Typography>
      <Grid container className={styles.treasuresView} spacing={2}>
        {/* Main treasure card */}
        <Grid size={4}>
          <TreasureCard isMain />
        </Grid>

        {/* Additional treasure cards */}
        <Grid size={8} container spacing={2}>
          {Array.from({ length: 6 }).map((_, index) => (
            <Grid size={4} key={index}>
              <TreasureCard />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Treasures;

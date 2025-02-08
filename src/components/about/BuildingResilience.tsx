import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import styles from "../../styles/about.module.scss";

const BuildingResilience: React.FC = () => {
  return (
    <Box className={styles.container} bgcolor={"primary.light"}>
      <Grid container className={styles.gridContainer}>
        <Grid size={6}>
          <Box className={styles.leftGridBox}>
            <Typography className={styles.title}>
              Building Economic Resilience
            </Typography>
            <Typography className={styles.subtitle}>
              We're committed to strengthening the economic resilience of this
              region for a sustainable and empowered future.
            </Typography>
          </Box>
        </Grid>
        <Grid size={6} className={styles.rightGrid}>
          <Image
            src={"./about/block3.svg"}
            alt={"Building Resilience"}
            width={480}
            height={270}
            style={{ display: "block" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BuildingResilience;

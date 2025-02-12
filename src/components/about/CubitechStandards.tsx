import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import styles from "../../styles/about.module.scss";

const CubitechStandards: React.FC = () => {
  return (
    <Box className={styles.container}>
      <Grid container className={styles.content}>
        <Grid size={6} className={styles.leftGrid}>
          <Image
            src={"./about/block4.svg"}
            alt={"Cubitech Standards"}
            width={480}
            height={270}
            style={{ display: "block" }}
          />
        </Grid>
        <Grid size={6}>
          <Box className={styles.rightGridBox}>
            <Typography className={styles.title}>Cubitech Standards</Typography>
            <Typography className={styles.subtitle}>
              We embrace strong corporate governance to fulfill the Cubitech
              Vision, making life easier through the seamless integration of
              diverse technologies.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CubitechStandards;

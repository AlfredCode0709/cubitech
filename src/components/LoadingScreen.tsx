import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import styles from "../styles/common.module.scss";

const LoadingScreen: React.FC<any> = () => {
  return (
    <Box className={styles.loadingScreen}>
      <Box className={styles.box}>
        <CircularProgress size={240} />
        <Box className={styles.content}>
          <Typography className={styles.text}>Loading</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoadingScreen;

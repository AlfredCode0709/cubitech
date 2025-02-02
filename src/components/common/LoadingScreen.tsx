import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import commonStyles from "../../styles/common.module.scss";

const LoadingScreen: React.FC<any> = () => {
  return (
    <Box className={commonStyles.loadingScreen}>
      <Box className={commonStyles.box}>
        <CircularProgress size={240} />
        <Box className={commonStyles.content}>
          <Typography className={commonStyles.text}>Loading</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoadingScreen;

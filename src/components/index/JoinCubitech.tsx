import ArrowForward from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import commonStyles from "../../styles/common.module.scss";

const JoinCubitech: React.FC<any> = () => {
  return (
    <Box className={commonStyles.joinSection}>
      <Grid container className={commonStyles.gridContainer}>
        <Grid item xs={9} className={commonStyles.leftGrid}>
          <Typography className={commonStyles.title}>Join Cubitech Today</Typography>
          <Typography className={commonStyles.subtitle}>
            Join us for exclusive promotions and the latest updates on events!
          </Typography>
        </Grid>
        <Grid item xs={3} className={commonStyles.rightGrid}>
          <Button
            startIcon={<ArrowForward />}
            color={"primary"}
            variant={"contained"}
            size={"large"}
          >
            Register Now
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default JoinCubitech;

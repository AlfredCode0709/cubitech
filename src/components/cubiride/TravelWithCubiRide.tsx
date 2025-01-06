import ArrowForward from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import commonStyles from "../../styles/common.module.scss";

const TravelWithCubiRide: React.FC<any> = () => {
  return (
    <Box className={commonStyles.joinSection}>
      <Grid container className={commonStyles.gridContainer}>
        <Grid item xs={9} className={commonStyles.leftGrid}>
          <Typography className={commonStyles.title}>
            Travel with CubiRide
          </Typography>
          <Typography className={commonStyles.subtitle}>
            Dependable and secure transportation to take you wherever you need
            to be.
          </Typography>
        </Grid>
        <Grid item xs={3} className={commonStyles.rightGrid}>
          <Button
            startIcon={<ArrowForward />}
            color={"primary"}
            variant={"contained"}
            size={"large"}
          >
            Book Now
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TravelWithCubiRide;

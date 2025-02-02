import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ArrowForward from "@mui/icons-material/ArrowForward";
import commonStyles from "../../styles/common.module.scss";
import { FC } from "react";

interface JoinSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

const JoinSection: FC<JoinSectionProps> = ({ title, subtitle, buttonText }) => {
  return (
    <Box className={commonStyles.joinSection}>
      <Grid container className={commonStyles.gridContainer}>
        <Grid item xs={9} className={commonStyles.leftGrid}>
          <Typography className={commonStyles.title}>{title}</Typography>
          <Typography className={commonStyles.subtitle}>{subtitle}</Typography>
        </Grid>
        <Grid item xs={3} className={commonStyles.rightGrid}>
          <Button
            startIcon={<ArrowForward />}
            color={"primary"}
            variant={"contained"}
            size={"large"}
          >
            {buttonText}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default JoinSection;

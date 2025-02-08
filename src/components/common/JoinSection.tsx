import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
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
        <Grid size={9} className={commonStyles.leftGrid}>
          <Typography className={commonStyles.title}>{title}</Typography>
          <Typography className={commonStyles.subtitle}>{subtitle}</Typography>
        </Grid>
        <Grid size={3} className={commonStyles.rightGrid}>
          <Button
            startIcon={<ArrowForwardIcon />}
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

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
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
      <Stack className={commonStyles.content}>
        <Stack className={commonStyles.leftContent}>
          <Typography className={commonStyles.title}>{title}</Typography>
          <Typography className={commonStyles.subtitle}>{subtitle}</Typography>
        </Stack>
        <Button
          startIcon={<ArrowForwardIcon />}
          color={"primary"}
          variant={"contained"}
          size={"large"}
        >
          {buttonText}
        </Button>
      </Stack>
    </Box>
  );
};

export default JoinSection;

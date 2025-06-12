import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import commonStyles from "@/styles/common.module.scss";
import { FC } from "react";

interface JoinSectionProps {
  title: string;
  descr: string;
  buttonText: string;
}

const JoinSection: FC<JoinSectionProps> = ({ title, descr, buttonText }) => {
  return (
    <Box className={commonStyles.joinSection}>
      <Box className={commonStyles.desktop} sx={{ display: { xs: "none", md: "block" } }}>
        <Stack className={commonStyles.content}>
          <Stack className={commonStyles.left}>
            <Typography className={commonStyles.title}>{title}</Typography>
            <Typography className={commonStyles.descr}>{descr}</Typography>
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

      <Box className={commonStyles.mobile} sx={{ display: { xs: "block", md: "none" } }}>
        <Stack className={commonStyles.content}>
          <Typography className={commonStyles.title}>{title}</Typography>
          <Typography className={commonStyles.descr}>{descr}</Typography>
          <Button color={"primary"} variant={"contained"}>
            {buttonText}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default JoinSection;

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import commonStyles from "@/styles/common.module.scss";
import { FC, ReactNode } from "react";

interface MissionStatementProps {
  children: ReactNode;
}

const MissionStatement: FC<MissionStatementProps> = ({ children }) => {
  return (
    <Box className={commonStyles.missionStatement}>
      <Box
        className={commonStyles.desktop}
        sx={{ display: { xs: "none", md: "block" } }}
      >
        <Typography className={commonStyles.text}>{children}</Typography>
      </Box>
      <Box
        className={commonStyles.mobile}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Typography className={commonStyles.text}>{children}</Typography>
      </Box>
    </Box>
  );
};

export default MissionStatement;

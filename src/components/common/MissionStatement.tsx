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
      <Typography className={commonStyles.text}>{children}</Typography>
    </Box>
  );
};

export default MissionStatement;

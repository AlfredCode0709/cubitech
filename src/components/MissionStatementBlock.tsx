import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import commonStyles from "../styles/common.module.scss";

interface MissionStatementBlockProps {
  children: React.ReactNode; // Dynamic content for title or text
}

const MissionStatementBlock: React.FC<MissionStatementBlockProps> = ({
  children,
}) => {
  return (
    <Box className={commonStyles.missionStatementBlock}>
      <Box className={commonStyles.content}>
        <Typography className={commonStyles.text}>
          {children}
        </Typography>
      </Box>
    </Box>
  );
};

export default MissionStatementBlock;

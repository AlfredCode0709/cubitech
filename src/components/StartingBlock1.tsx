import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import commonStyles from "../styles/common.module.scss";

interface StartingBlock1Props {
  backgroundImage: string; // Dynamic background image URL
  children: React.ReactNode; // Dynamic content for title or text
}

const StartingBlock1: React.FC<StartingBlock1Props> = ({
  backgroundImage,
  children,
}) => {
  return (
    <Box
      className={commonStyles.startingBlock1}
      style={
        {
          "--background-image": `url(${backgroundImage})`,
        } as React.CSSProperties
      } // Set dynamic background image
    >
      <Typography className={commonStyles.title}>
        {children} {/* Render dynamic content */}
      </Typography>
    </Box>
  );
};

export default StartingBlock1;

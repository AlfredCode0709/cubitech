import React from "react";
import { Box } from "@mui/material";
import commonStyles from "../styles/common.module.scss";

interface StartingBlock2Props {
  backgroundImage: string; // Dynamic background image URL
}

const StartingBlock2: React.FC<StartingBlock2Props> = ({ backgroundImage }) => {
  return (
    <Box
      className={commonStyles.startingBlock2}
      style={
        {
          "--background-image": `url(${backgroundImage})`,
        } as React.CSSProperties
      } // Set dynamic background image
    />
  );
};

export default StartingBlock2;

import Box from "@mui/material/Box";
import commonStyles from "../../styles/common.module.scss";
import { CSSProperties, ReactNode } from "react";

interface StartingBlock1Props {
  backgroundImage: string; // URL for the background image
}

const StartingBlock2: React.FC<StartingBlock1Props> = ({ backgroundImage }) => {
  return (
    <Box
      className={commonStyles.startingBlock2}
      style={
        {
          "--background-image": `url(${backgroundImage})`,
        } as CSSProperties // Type assertion for CSS variables
      }
    />
  );
};

export default StartingBlock2;

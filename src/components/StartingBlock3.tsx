import Box from "@mui/material/Box";
import commonStyles from "../styles/common.module.scss";
import { CSSProperties } from "react";

interface StartingBlock3Props {
  backgroundImage: string; // URL for the background image
}

const StartingBlock3: React.FC<StartingBlock3Props> = ({ backgroundImage }) => {
  return (
    <Box
      className={commonStyles.startingBlock3}
      style={
        {
          "--background-image": `url(${backgroundImage})`,
        } as CSSProperties // Type assertion for CSS variables
      }
    />
  );
};

export default StartingBlock3;

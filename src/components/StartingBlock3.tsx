import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import commonStyles from "../styles/common.module.scss";
import { CSSProperties } from "react";

interface StartingBlock1Props {
  backgroundImage: string; // URL for the background image
}

const StartingBlock1: React.FC<StartingBlock1Props> = ({
  backgroundImage,
}) => {
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

export default StartingBlock1;

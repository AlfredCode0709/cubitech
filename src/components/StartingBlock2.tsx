import Box from "@mui/material/Box";
import commonStyles from "../styles/common.module.scss";
import { CSSProperties } from "react";

interface StartingBlock2Props {
  backgroundImage: string; // URL for the background image
}

const StartingBlock2: React.FC<StartingBlock2Props> = ({ backgroundImage }) => {
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

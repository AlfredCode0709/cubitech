import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import commonStyles from "../styles/common.module.scss";
import { CSSProperties } from "react";

interface StartingBlock1Props {
  backgroundImage: string; // URL for the background image
  children: React.ReactNode; // Content inside the component
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
        } as CSSProperties // Type assertion for CSS variables
      }
    >
      <Typography className={commonStyles.title}>{children}</Typography>
    </Box>
  );
};

export default StartingBlock1;
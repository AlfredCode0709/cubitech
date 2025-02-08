import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import commonStyles from "../../styles/common.module.scss";
import { CSSProperties, FC, ReactNode } from "react";

interface StartingBlock1Props {
  backgroundImage: string;
  children: ReactNode;
}

const StartingBlock1: FC<StartingBlock1Props> = ({
  backgroundImage,
  children,
}) => {
  return (
    <Box
      className={commonStyles.startingBlock1}
      style={
        {
          "--background-image": `url(${backgroundImage})`,
        } as CSSProperties
      }
    >
      <Typography className={commonStyles.title}>{children}</Typography>
    </Box>
  );
};

export default StartingBlock1;

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import commonStyles from "@/styles/common.module.scss";
import { CSSProperties, FC, ReactNode } from "react";

interface StartingBlock1Props {
  backgroundImage?: string;
  backgroundPosition?: string;
  overlay?: string;
  children: ReactNode;
}

const StartingBlock1: FC<StartingBlock1Props> = ({
  backgroundImage,
  backgroundPosition,
  overlay,
  children,
}) => {
  return (
    <Box
      className={commonStyles.startingBlock1}
      sx={
        {
          "--background-image": `url(${backgroundImage || "/default.png"})`,
          "--background-position": backgroundPosition || "center",
          "--overlay": overlay || "#00000059"
        } as CSSProperties
      }
    >
      <Typography className={commonStyles.title}>{children}</Typography>
    </Box>
  );
};

export default StartingBlock1;

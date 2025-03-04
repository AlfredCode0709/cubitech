import Box from "@mui/material/Box";
import commonStyles from "../../styles/common.module.scss";
import { CSSProperties, FC } from "react";

interface StartingBlock3Props {
  backgroundImage: string;
}

const StartingBlock3: FC<StartingBlock3Props> = ({
  backgroundImage,
}) => {
  return (
    <Box
      className={commonStyles.startingBlock3}
      style={
        {
          "--background-image": `url(${backgroundImage || "/default.png"})`,
        } as CSSProperties
      }
    />
  );
};

export default StartingBlock3;

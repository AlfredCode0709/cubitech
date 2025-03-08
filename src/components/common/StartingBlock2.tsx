import Box from "@mui/material/Box";
import commonStyles from "../../styles/common.module.scss";
import { CSSProperties, FC } from "react";

interface StartingBlock2Props {
  backgroundImage: string;
}

const StartingBlock2: FC<StartingBlock2Props> = ({
  backgroundImage,
}) => {
  return (
    <Box
      className={commonStyles.startingBlock2}
      style={
        {
          "--background-image": `url(${backgroundImage || "/default.png"})`,
        } as CSSProperties
      }
    />
  );
};

export default StartingBlock2;

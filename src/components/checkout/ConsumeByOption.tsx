import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import TakeoutDiningIcon from "@mui/icons-material/TakeoutDining";
import { FC } from "react";

interface ConsumeByOptionProps {
  consumeBy: any;
  handleConsumeBy: any;
}

const ConsumeByOption: FC<ConsumeByOptionProps> = ({
  consumeBy,
  handleConsumeBy,
}) => {
  return (
    <ToggleButtonGroup
      value={consumeBy}
      exclusive
      onChange={handleConsumeBy}
      color={"primary"}
      sx={{
        marginBottom: "5%",
      }}
    >
      <ToggleButton value={"dineIn"}>
        <LocalDiningIcon />
        &nbsp;
        <Typography fontWeight={500}>Dine In</Typography>
      </ToggleButton>
      <ToggleButton value={"takeaway"}>
        <TakeoutDiningIcon />
        &nbsp;
        <Typography fontWeight={500}>Takeaway</Typography>
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ConsumeByOption;

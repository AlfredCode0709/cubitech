import Box from "@mui/material/Box";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import { FC, Fragment } from "react";

const HomeDefault: FC = () => {
  return (
    <Fragment>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <DesktopView />
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <MobileView />
      </Box>
    </Fragment>
  );
};

export default HomeDefault;

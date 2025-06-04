import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { FC, Fragment } from "react";

interface CubitechLogoProps {
  colorMode?: "light" | "dark";
}

const CubitechLogo: FC<CubitechLogoProps> = ({ colorMode }) => {
  return (
    <Fragment>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Avatar
          className={"desktopAvatar"}
          alt={"CubiFood"}
          src={
            colorMode === "dark"
              ? "https://ik.imagekit.io/a1fr3d10/cubifood_dark.svg?updatedAt=1748149908835"
              : "https://ik.imagekit.io/a1fr3d10/cubifood_light.svg?updatedAt=1748149908936"
          }
          variant={"square"}
        />
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Avatar
          className={"desktopAvatar"}
          alt={"CubiFood"}
          src={
            colorMode === "dark"
              ? "https://ik.imagekit.io/a1fr3d10/cubifood_dark.svg?updatedAt=1748149908835"
              : "https://ik.imagekit.io/a1fr3d10/cubifood_light.svg?updatedAt=1748149908936"
          }
          variant={"square"}
        />
      </Box>
    </Fragment>
  );
};

export default CubitechLogo;

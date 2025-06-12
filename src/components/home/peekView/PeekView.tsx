import Box from "@mui/material/Box";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import styles from "@/styles/home.module.scss";
import { FC } from "react";

export const titleConfig = {
  CUBIFood: {
    path: "https://ik.imagekit.io/a1fr3d10/cubifood_light.svg?updatedAt=1748149908936",
    color: "#09b96d",
  },
  CUBIMart: {
    path: "https://ik.imagekit.io/a1fr3d10/cubimart_light.svg?updatedAt=1748149912562",
    color: "#bf3953",
  },
} as const;

export type TitleType = keyof typeof titleConfig;

interface PeekViewProps {
  title: TitleType;
  totalItems: number;
}

const PeekView: FC<PeekViewProps> = ({ title, totalItems }) => {
  return (
    <Box className={styles.peekView}>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <DesktopView title={title} totalItems={totalItems} />
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <MobileView title={title} totalItems={totalItems} />
      </Box>
    </Box>
  );
};

export default PeekView;

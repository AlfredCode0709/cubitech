import Box from "@mui/material/Box";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import commonStyles from "@/styles/common.module.scss";
import { CSSProperties, FC } from "react";

interface PromotionsProps {
  header?: string;
  title?: string;
  descr?: string;
  bgColor?: string;
  color?: string;
  image?: string;
}

const Promotions: FC<PromotionsProps> = ({
  header,
  title,
  descr,
  bgColor,
  color,
  image,
}) => {
  const style: CSSProperties = {
    "--bgColor": bgColor || "var(--white)",
    "--color": color || "var(--primary-main)",
  } as CSSProperties;

  return (
    <Box className={commonStyles.promotions} sx={style}>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <DesktopView
          header={header}
          title={title}
          descr={descr}
          image={image}
        />
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <MobileView header={header} title={title} descr={descr} image={image} />
      </Box>
    </Box>
  );
};

export default Promotions;

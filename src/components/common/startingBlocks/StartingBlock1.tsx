import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import commonStyles from "@/styles/common.module.scss";
import { CSSProperties, FC, ReactNode, useEffect, useState } from "react";

interface StartingBlock1Props {
  bgImage?: string;
  bgPosition?: string;
  overlay?: string;
  titleFontSize?: number;
  textDivider?: number;
  subtitleFontSize?: number;
  title?: ReactNode;
  subtitle?: ReactNode;
}

const StartingBlock1: FC<StartingBlock1Props> = ({
  bgImage = "https://ik.imagekit.io/a1fr3d10/default_bg.png?updatedAt=1748148547544",
  bgPosition,
  overlay,
  titleFontSize,
  textDivider,
  subtitleFontSize,
  title,
  subtitle,
}) => {
  const [bgImg, setBgImg] = useState(bgImage);

  useEffect(() => {
    const img = new window.Image();
    img.src = bgImage;
    img.onload = () => setBgImg(bgImage);
    img.onerror = () =>
      setBgImg(
        "https://ik.imagekit.io/a1fr3d10/default_bg.png?updatedAt=1748148547544"
      );
  }, [bgImage]);

  const style: CSSProperties = {
    "--bgImage": `url(${bgImg})`,
    "--bgPosition": bgPosition || "center",
    "--overlay": overlay || "#00000059",
    "--titleFontSize": `${titleFontSize}px`,
    "--textDivider": `${textDivider}px`,
    "--subtitleFontSize": `${subtitleFontSize}px`,
  } as CSSProperties;

  return (
    <Box className={commonStyles.startingBlock1} sx={style}>
      <Typography className={commonStyles.text} component={"div"}>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <span className={commonStyles.desktopTitle}>{title}</span>
        </Box>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <span>
            <span className={commonStyles.mobileTitle}>{title}</span>
            <br />
            <span className={commonStyles.mobileTextDivider}>━━━</span>
            <br />
            <span className={commonStyles.mobileSubtitle}>{subtitle}</span>
          </span>
        </Box>
      </Typography>
    </Box>
  );
};

export default StartingBlock1;

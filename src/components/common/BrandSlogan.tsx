import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import commonStyles from "../../styles/common.module.scss";
import { CSSProperties, FC, ReactNode } from "react";

interface BrandSloganProps {
  color: string;
  children: ReactNode;
}

const BrandSlogan: FC<BrandSloganProps> = ({ color, children }) => {
  return (
    <Box
      className={commonStyles.brandSlogan}
      style={
        {
          color: `${color}`,
        } as CSSProperties
      }
    >
      <Typography className={commonStyles.text}>{children}</Typography>
    </Box>
  );
};

export default BrandSlogan;

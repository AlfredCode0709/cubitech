import React from "react";
import { Box, Typography } from "@mui/material";
import commonStyles from "../styles/common.module.scss";

interface BrandSloganProps {
  color: string; // Dynamic background image URL
  children: React.ReactNode; // Dynamic content for title or text
}

const BrandSlogan: React.FC<BrandSloganProps> = ({ color, children }) => {
  return (
    <Box
      className={commonStyles.brandSloganBlock}
      style={
        {
          "--color": `${color}`,
        } as React.CSSProperties
      } // Set dynamic background image
    >
      <Typography className={commonStyles.text}>
        {children} {/* Render dynamic content */}
      </Typography>
    </Box>
  );
};

export default BrandSlogan;

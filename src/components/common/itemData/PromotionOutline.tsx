import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import commonStyles from "@/styles/common.module.scss";
import { FC } from "react";

interface PromotionOutlineProps {
  promotions: string[];
}

const PromotionOutline: FC<PromotionOutlineProps> = ({ promotions }) => {
  return (
    <Box className={commonStyles.promotionOutline}>
      <Typography className={commonStyles.title}>Promotions</Typography>
      {promotions.map((promotion, index) => (
        <Chip key={index} color={"primary"} label={promotion} />
      ))}
    </Box>
  );
};

export default PromotionOutline;

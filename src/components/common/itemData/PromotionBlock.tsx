import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import commonStyles from "@/styles/common.module.scss";
import { FC } from "react";

interface PromotionBlockProps {
  promotions: string[];
}

const PromotionBlock: FC<PromotionBlockProps> = ({ promotions }) => {
  return (
    <Box className={commonStyles.promotionBlock}>
      <Typography className={commonStyles.title}>Promotions</Typography>
      {promotions.map((promotion, index) => (
        <Chip key={index} color={"primary"} label={promotion} />
      ))}
    </Box>
  );
};

export default PromotionBlock;

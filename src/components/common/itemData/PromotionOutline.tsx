import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import commonStyles from "../../../styles/common.module.scss";

const PromotionOutline: FC<any> = () => {
  return (
    <Box className={commonStyles.promotionOutline}>
      <Typography className={commonStyles.title}>Promotions</Typography>
      <Chip color={"primary"} label="Promotion 1" />
      <Chip color={"primary"} label="Promotion 2" />
    </Box>
  );
};

export default PromotionOutline;

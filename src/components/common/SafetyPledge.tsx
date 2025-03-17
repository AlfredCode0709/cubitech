import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import commonStyles from "@/styles/common.module.scss";
import { FC } from "react";

interface SafetyPledgeItem {
  alt: string;
  src: string;
  title: string;
  descr: string;
}

interface SafetyPledgeProps {
  title: string;
  items: SafetyPledgeItem[];
}

const SafetyPledge: FC<SafetyPledgeProps> = ({ title, items }) => {
  return (
    <Box className={commonStyles.safetyPledge}>
      <Typography className={commonStyles.title}>{title}</Typography>

      <Stack className={commonStyles.stackContainer}>
        <Stack className={commonStyles.stackRow}>
          {items.map((item, index) => (
            <Stack key={index} className={commonStyles.stackItem}>
              <Avatar
                className={commonStyles.avatar}
                alt={item.alt}
                src={item.src}
                component={"div"}
                variant={"square"}
              />
              <Typography className={commonStyles.itemTitle}>
                {item.title}
              </Typography>
              <Typography className={commonStyles.itemDescr}>
                {item.descr}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default SafetyPledge;

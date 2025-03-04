import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import commonStyles from "../../styles/common.module.scss";
import { FC } from "react";

interface HighlightItem {
  alt: string;
  src: string;
  title: string;
  descr: string;
}

interface HighlightsProps {
  title: string;
  items: HighlightItem[];
}

const Highlights: FC<HighlightsProps> = ({ title, items }) => {
  return (
    <Box className={commonStyles.highlights}>
      <Typography className={commonStyles.title}>{title}</Typography>

      <Stack className={commonStyles.stackContainer}>
        <Stack direction="row" className={commonStyles.stackRow}>
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

export default Highlights;

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
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

      <Grid container className={commonStyles.gridContainer}>
        {items.map((item, index) => (
          <Grid item xs={4} className={commonStyles.gridItem} key={index}>
            <Avatar
              className={commonStyles.avatar}
              alt={item.alt}
              src={item.src}
              component={"div"}
              variant={"square"}
            />
            <Typography className={commonStyles.title}>{item.title}</Typography>
            <Typography className={commonStyles.description}>
              {item.descr}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Highlights;

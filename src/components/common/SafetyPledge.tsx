import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import commonStyles from "../../styles/common.module.scss";
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

export default SafetyPledge;

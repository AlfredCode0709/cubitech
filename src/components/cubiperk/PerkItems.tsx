import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import styles from "../../styles/cubiperk.module.scss";
import { perkItem } from "./perkItem";
import { FC } from "react";

const PerkItems: FC<any> = () => {
  return (
    <Grid container className={styles.gridContainer1} spacing={2}>
      {perkItem.map((item) => (
        <Grid size={4} key={item.id}>
          <Box className={styles.box}>
            <Avatar
              className={styles.avatar}
              alt={item.alt}
              src={item.iconSrc}
            />
            <Typography className={styles.description}>
              {item.description}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default PerkItems;

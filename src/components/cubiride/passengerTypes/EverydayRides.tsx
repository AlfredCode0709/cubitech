import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styles from "../../../styles/cubiride.module.scss";
import { everydayAvatars } from "../everydayRides";
import { FC } from "react";

const EverydayRides: FC<any> = () => {
  return (
    <Box className={styles.everydayRides}>
      <Typography className={styles.title}>Everyday Rides</Typography>
      <Grid container className={styles.gridContainer}>
        {everydayAvatars.map((avatar, index) => (
          <Grid item xs={4} className={styles.gridItem} key={index}>
            <Avatar
              className={styles.avatar}
              key={index}
              alt={avatar.alt}
              src={avatar.src}
              component={"div"}
              variant={"square"}
            />
            <Typography className={styles.title}>{avatar.title}</Typography>
            <Typography className={styles.description}>
              {avatar.descr}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EverydayRides;

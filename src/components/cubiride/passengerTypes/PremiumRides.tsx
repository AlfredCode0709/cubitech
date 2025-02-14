import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styles from "../../../styles/cubiride.module.scss";
import { premiumAvatars } from "../premiumRides";
import { FC } from "react";

const PremiumRides: FC<any> = () => {
  return (
    <Box className={styles.premiumRides}>
      <Typography className={styles.title}>Premium Rides</Typography>
      <Grid container className={styles.gridContainer}>
        {premiumAvatars.map((avatar, index) => (
          <Grid item className={styles.gridItem} xs={4} key={index}>
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

export default PremiumRides;

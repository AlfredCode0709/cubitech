import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import styles from "@/styles/cubiride.module.scss";
import { premiumAvatars } from "./premiumRides";
import { FC } from "react";

const PremiumRides: FC = () => {
  return (
    <Box className={styles.premiumRides}>
      <Typography className={styles.title}>Premium Rides</Typography>

      <Stack className={styles.stackContainer}>
        <Stack direction="row" className={styles.stackRow}>
          {premiumAvatars.map((avatar, index) => (
            <Stack key={index} className={styles.stackItem}>
              <Avatar
                className={styles.avatar}
                alt={avatar.alt}
                src={avatar.src}
                component={"div"}
                variant={"square"}
              />
              <Typography className={styles.itemTitle}>
                {avatar.title}
              </Typography>
              <Typography className={styles.itemDescr}>
                {avatar.descr}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default PremiumRides;

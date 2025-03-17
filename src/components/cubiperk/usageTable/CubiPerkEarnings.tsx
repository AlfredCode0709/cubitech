import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import styles from "@/styles/cubiperk.module.scss";
import { earningMethods } from "./earningMethods";
import { FC } from "react";

const CubiPerkEarnings: FC = () => (
  <>
    <Grid size={12}>
      <Avatar
        className={styles.sendMoneyIcon}
        alt={"SendMoneyCubiPay"}
        src={
          "https://res.cloudinary.com/dcsfz2ydj/image/upload/v1741068676/block3_gxwju3.svg"
        }
        variant={"square"}
      />
    </Grid>

    {earningMethods.map((item, index) => (
      <Grid
        className={styles.cubiPerkEarningMethod}
        size={index < 3 ? 4 : 6}
        key={index}
      >
        <Box
          width={index < 3 ? "100%" : "67%"}
          marginLeft={index === 3 ? "33%" : 0}
          marginRight={index === 4 ? "33%" : 0}
        >
          <Avatar className={styles.avatar} src={item.iconSrc} />
          <Typography className={styles.descr} component={"div"}>
            {item.descr}
          </Typography>
        </Box>
      </Grid>
    ))}
  </>
);

export default CubiPerkEarnings;

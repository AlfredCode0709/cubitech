import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "@/styles/home.module.scss";
import { cubitechBrands } from "./cubitechBrands";
import { FC, Fragment } from "react";

const DesktopView: FC = () => {
  return (
    <Box className={styles.desktop}>
      <Typography className={styles.slogan}>
        One platform, countless solutions - from essentials to opportunities.
      </Typography>

      <Box className={styles.brands}>
        {cubitechBrands.map((item) => (
          <Fragment key={item.key}>
            <Avatar
              className={styles.desktopAvatar}
              alt={item.alt}
              src={item.src}
              component={"div"}
              variant={"square"}
            />
          </Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default DesktopView;

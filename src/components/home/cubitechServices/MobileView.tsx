import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styles from "@/styles/home.module.scss";
import { cubitechBrands } from "./cubitechBrands";
import { FC, Fragment } from "react";

const MobileView: FC = () => {
  return (
    <Fragment>
      <Typography className={styles.slogan}>
        One platform, countless solutions
        <br />
        from essentials to opportunities.
      </Typography>

      <Box className={styles.brands}>
        <Grid container spacing={2}>
          {cubitechBrands.map((item) => (
            <Grid size={6} className={styles.gridItem} key={item.key}>
              <Avatar
                className={styles.mobileAvatar}
                alt={item.alt}
                src={item.src}
                component={"div"}
                variant={"square"}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Fragment>
  );
};

export default MobileView;

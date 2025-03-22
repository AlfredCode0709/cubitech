import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import styles from "@/styles/index.module.scss";
import { cubitechBrands } from "./cubitechBrands";
import { FC, Fragment } from "react";

const CubitechServices: FC = () => {
  return (
    <Box className={styles.cubitechServices}>
      <Typography className={styles.slogan}>
        One platform, countless solutions - from essentials to opportunities.
      </Typography>

      <Box className={styles.brands}>
        {cubitechBrands.map((item) => (
          <Fragment key={item.key}>
            <Link href={item.href}>
              <Avatar
                className={styles.avatar}
                alt={item.alt}
                src={item.src}
                component={"div"}
                variant={"square"}
              />
            </Link>
          </Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default CubitechServices;

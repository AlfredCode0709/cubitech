import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import styles from "../../styles/index.module.scss";
import { FC } from "react";

const CubitechServices: FC<any> = () => {
  return (
    <Box className={styles.cubitechServices}>
      {/* Cubitech slogan */}
      <Typography className={styles.slogan}>
        One platform, countless solutions - from essentials to opportunities.
      </Typography>

      {/* Cubitech brand avatars */}
      <Box className={styles.brands}>
        {[
          "CubiFood",
          "CubiMart",
          "CubiRide",
          "CubiPay",
          "CubiGift",
          "CubiPerk",
        ].map((item) => (
          <Link href={`/${item.toLowerCase()}`}>
            <Avatar
              className={styles.avatar}
              alt={item}
              src={`/cubitech_brands/${item.toLowerCase()}_light.svg`}
              component={"div"}
              variant={"square"}
            />
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default CubitechServices;

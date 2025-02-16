import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import styles from "../../styles/index.module.scss";
import { FC } from "react";

const serviceList = [
  "CubiFood",
  "CubiMart",
  "CubiRide",
  "CubiPay",
  "CubiGift",
  "CubiPerk",
];

const ServiceShortcuts: FC<any> = () => (
  <>
    {serviceList.map((item) => (
      <Grid size={2} key={item} className={styles.userShortcutBox}>
        <Link href={`/${item.toLowerCase()}`} passHref>
          <Avatar
            className={styles.avatar}
            alt={item}
            src={`/cubitech_brands/${item.toLowerCase()}_light.svg`}
            variant="square"
          />
        </Link>
      </Grid>
    ))}
  </>
);

export default ServiceShortcuts;

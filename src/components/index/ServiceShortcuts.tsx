import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import styles from "../../styles/index.module.scss";
import { serviceList } from "./serviceList";
import { FC } from "react";

const ServiceShortcuts: FC<any> = () => (
  <>
    {serviceList.map((item, index) => (
      <Grid size={2} key={index} className={styles.userShortcutBox}>
        <Link href={item.href} passHref>
          <Avatar
            className={styles.avatar}
            alt={item.alt}
            src={item.imageSrc}
            variant={"square"}
          />
        </Link>
      </Grid>
    ))}
  </>
);

export default ServiceShortcuts;

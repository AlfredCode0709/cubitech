import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import styles from "@/styles/404.module.scss";
import { FC } from "react";

const DesktopView: FC = () => {
  return (
    <Box className={styles.desktop}>
      <Avatar
        className={styles.avatar}
        alt="404 Not Found"
        src={"https://ik.imagekit.io/a1fr3d10/404.svg?updatedAt=1748257417710"}
        variant={"square"}
      />

      <Typography className={styles.title}>
        Oops! It seems that you{`'`}re lost in the website!
      </Typography>
      <Typography className={styles.descr}>
        We couldn{`'`}t find the page you were looking for. Let{`'`}s get you
        back on track!
      </Typography>

      <Typography className={styles.callToAction}>
        Try navigate back to:{" "}
        <Link className={styles.link} href={"/"}>
          Home
        </Link>
      </Typography>
    </Box>
  );
};

export default DesktopView;

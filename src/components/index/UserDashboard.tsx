import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styles from "../../styles/index.module.scss";
import React from "react";
import Link from "next/link";

const accountInfoCards = [
  {
    title: (
      <React.Fragment>
        <Typography className={styles.cubiPay}>
          CUBI
          <span className={styles.subColor1}>Pay</span>
        </Typography>
        &nbsp;Wallet
      </React.Fragment>
    ),
    value: "S$9999.99",
  },
  {
    title: (
      <React.Fragment>
        <Typography className={styles.cubiPerk}>
          CUBI
          <span className={styles.subColor2}>Perk</span>
        </Typography>
        &nbsp;Points
      </React.Fragment>
    ),
    value: "99999",
  },
];

const userShortcut = [
  {
    alt: "CubiFood",
    src: "./cubitech_brands/cubifood_light.svg",
    href: "./cubifood",
  },
  {
    alt: "CubiMart",
    src: "./cubitech_brands/cubimart_light.svg",
    href: "./cubimart",
  },
  {
    alt: "CubiRide",
    src: "./cubitech_brands/cubiride_light.svg",
    href: "./cubiride",
  },
  {
    alt: "CubiPay",
    src: "./cubitech_brands/cubipay_light.svg",
    href: "./cubipay",
  },
  {
    alt: "CubiGift",
    src: "./cubitech_brands/cubigift_light.svg",
    href: "./cubigift",
  },
  {
    alt: "CubiPerk",
    src: "./cubitech_brands/cubiperk_light.svg",
    href: "./cubiperk",
  },
];

const UserDashboard: React.FC<any> = () => {
  return (
    <Box className={styles.userDashboard}>
      <Grid container spacing={2} rowSpacing={4}>
        <Grid item xs={8}>
          <Box className={styles.infographicBox} />
        </Grid>
        <Grid item xs={4} className={styles.accountInfo}>
          {accountInfoCards.map((card, index) => (
            <Card
              key={index}
              variant={"outlined"}
              className={`${styles.card} ${index !== 0 ? styles.marginTop : ""}`}
            >
              <Typography className={styles.title} component={"div"}>
                {card.title}
              </Typography>
              <Typography className={styles.value}>{card.value}</Typography>
            </Card>
          ))}
        </Grid>
        {userShortcut.map((shortcut, index) => (
          <Grid item xs={2} key={index}>
            <Box className={styles.userShortcutBox}>
              <Link href={shortcut.href}>
                <Avatar
                  className={styles.avatar}
                  alt={shortcut.alt}
                  src={shortcut.src}
                  component={"div"}
                  variant={"square"}
                />
              </Link>
            </Box>
          </Grid>
        ))}{" "}
      </Grid>
    </Box>
  );
};

export default UserDashboard;

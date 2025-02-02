import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { FC, Fragment } from "react";
import styles from "../../styles/index.module.scss";

const accountInfoCards = [
  {
    title: (
      <Fragment>
        <Typography className={styles.cubiPay}>
          CUBI
          <span className={styles.subColor1}>Pay</span>
        </Typography>
        &nbsp;Wallet
      </Fragment>
    ),
    value: "S$9999.99",
  },
  {
    title: (
      <Fragment>
        <Typography className={styles.cubiPerk}>
          CUBI
          <span className={styles.subColor2}>Perk</span>
        </Typography>
        &nbsp;Points
      </Fragment>
    ),
    value: "99999",
  },
];

const UserDashboard: FC<any> = () => {
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
              className={`${styles.card} ${
                index !== 0 ? styles.marginTop : ""
              }`}
            >
              <Typography className={styles.title} component={"div"}>
                {card.title}
              </Typography>
              <Typography className={styles.value}>{card.value}</Typography>
            </Card>
          ))}
        </Grid>
        {[
          "CubiFood",
          "CubiMart",
          "CubiRide",
          "CubiPay",
          "CubiGift",
          "CubiPerk",
        ].map((item) => (
          <Grid item xs={2} key={item}>
            <Box className={styles.userShortcutBox}>
              <Link href={`/${item.toLowerCase()}`}>
                <Avatar
                  className={styles.avatar}
                  alt={item}
                  src={`/cubitech_brands/${item.toLowerCase()}_light.svg`}
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

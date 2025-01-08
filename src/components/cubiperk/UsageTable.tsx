import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import styles from "../../styles/cubiperk.module.scss";

const UsageTable: React.FC<any> = () => {
  // Data for the three top-up methods
  const topUpMethods = [
    {
      subtitle: (
        <React.Fragment>
          Top up using <br />
          <span style={{ fontWeight: 600 }}>PayNow</span>
        </React.Fragment>
      ),
    },
    {
      subtitle: (
        <React.Fragment>
          Top up from your
          <br />
          bank <span style={{ fontWeight: 600 }}>via FAST</span>
        </React.Fragment>
      ),
    },
    { subtitle: "Top up using debit/credit cards" },
  ];

  // Data for how CubiPerk points can be used
  const cubiPerkEarningMethods = [
    {
      iconSrc: "./cubiperk/icon1.svg",
      descr: (
        <React.Fragment>
          Use it for transactions inside<br/>CUBITECH app
        </React.Fragment>
      ),
    },
    {
      iconSrc: "./cubiperk/icon2.svg",
      descr: (
        <React.Fragment>
          Use it to shop online with<br/>CUBIPay or CUBIPayLater
        </React.Fragment>
      ),
    },
    {
      iconSrc: "./cubiperk/icon3.svg",
      descr: (
        <React.Fragment>
          Use it in-store that accepts<br/>CUBIPay or CUBIPayLater
        </React.Fragment>
      ),
    },
    {
      iconSrc: "./cubiperk/icon4.svg",
      descr: (
        <React.Fragment>
          Use it to make transfers<br/>to other CUBIPay users
        </React.Fragment>
      ),
    },
    {
      iconSrc: "./cubiperk/icon5.svg",
      descr: (
        <React.Fragment>Withdraw cash to<br/>your bank account</React.Fragment>
      ),
    },
  ];

  return (
    <Box className={styles.usageTable}>
      <Typography className={styles.title}>
        Top Up, Spend, Earn Points!
      </Typography>

      <Typography className={styles.subtitle} component={"div"}>
        The more you use CubiPay Wallet (including&nbsp;
        <Typography className={styles.cubiPayLater} component={"div"}>
          CUBI<span className={styles.subColor1}>Pay</span>
          <span className={styles.subColor2}>Later</span>
        </Typography>
        ), the easier it is to go cashless.
      </Typography>

      <Typography className={styles.subtitle}>
        Here's a quick overview at what you can do online and offline.
      </Typography>

      <Grid
        container
        className={styles.gridContainer}
        columnSpacing={2}
        rowSpacing={4}
      >
        <Grid item xs={12}>
          <Typography className={styles.title}>
            Enjoy zero fees on all top-ups!
          </Typography>
        </Grid>

        {/* Map over the topUpMethods array */}
        {topUpMethods.map((method, index) => (
          <Grid item xs={4} key={index} className={styles.topUpMethodGrid}>
            <Box className={styles.box}>
              <Typography className={styles.text}>{method.subtitle}</Typography>
            </Box>
          </Grid>
        ))}

        <Grid item xs={12}>
          <Avatar
            className={styles.sendMoneyIcon}
            alt={"SendMoneyCubiPay"}
            src={"./cubiperk/block3.svg"}
            variant={"square"}
          />
        </Grid>

        {cubiPerkEarningMethods.map((item, index) => (
          <Grid
            item
            className={styles.cubiPerkEarningMethod}
            xs={index < 3 ? 4 : 6}
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
      </Grid>
    </Box>
  );
};

export default UsageTable;

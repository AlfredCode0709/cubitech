import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import styles from "../../styles/cubiperk.module.scss";
import { FC, JSX } from "react";

interface EarningMethod {
  iconSrc: string;
  descr: JSX.Element | string;
}

const earningMethods: EarningMethod[] = [
  {
    iconSrc: "./cubiperk/icon1.svg",
    descr: (
      <>
        Use it for transactions inside
        <br />
        CUBITECH app
      </>
    ),
  },
  {
    iconSrc: "./cubiperk/icon2.svg",
    descr: (
      <>
        Use it to shop online with
        <br />
        CUBIPay or CUBIPayLater
      </>
    ),
  },
  {
    iconSrc: "./cubiperk/icon3.svg",
    descr: (
      <>
        Use it in-store accepting
        <br />
        CUBIPay or CUBIPayLater
      </>
    ),
  },
  {
    iconSrc: "./cubiperk/icon4.svg",
    descr: (
      <>
        Make transfers
        <br />
        to other CUBIPay users
      </>
    ),
  },
  {
    iconSrc: "./cubiperk/icon5.svg",
    descr: (
      <>
        Withdraw cash to
        <br />
        your bank account
      </>
    ),
  },
];

const CubiPerkEarnings: FC<any> = () => (
  <>
    <Grid size={12}>
      <Avatar
        className={styles.sendMoneyIcon}
        alt={"SendMoneyCubiPay"}
        src={"./cubiperk/block3.svg"}
        variant={"square"}
      />
    </Grid>

    {earningMethods.map((item, index) => (
      <Grid
        className={styles.cubiPerkEarningMethod}
        size={index < 3 ? 4 : 6}
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
  </>
);

export default CubiPerkEarnings;

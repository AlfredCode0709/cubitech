import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import commonStyles from "../../styles/common.module.scss";

const cubipayAvatars = [
  {
    alt: "Earn Rewards",
    src: "./cubipay/earn_rewards.svg",
    title: "Earn Rewards",
    descr: `Receive 0.75% back in CubiPerk points for every dollar spent. Redeem points for rides, meals, or discounts.`,
  },
  {
    alt: "Seamless Transactions",
    src: "./cubipay/seamless_transactions.svg",
    title: "Seamless Transactions",
    descr: `Enjoy hassle-free payments for all your favourite CubiPay services, from essentials to shopping.`,
  },
  {
    alt: "Easy Payments",
    src: "./cubipay/easy_payments.svg",
    title: "Easy Payments",
    descr: `Simply scan QR codes in-store or pay online with your smartphone — look for the CubiPay logo!`,
  },
];

const CubiPayAspects: React.FC<any> = () => {
  return (
    <Box className={commonStyles.cubiPayAspectsBlock}>
      <Typography className={commonStyles.title}>Why choose CubiPay?</Typography>

      <Grid container className={commonStyles.gridContainer}>
        {cubipayAvatars.map((avatar, index) => (
          <Grid item xs={4} className={commonStyles.gridItem} key={index}>
            <Avatar
              className={commonStyles.avatar}
              key={index}
              alt={avatar.alt}
              src={avatar.src}
              component={"div"}
              variant={"square"}
            />
            <Typography className={commonStyles.avatarTitle}>
              {avatar.title}
            </Typography>
            <Typography className={commonStyles.avatarDescription}>
              {avatar.descr}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CubiPayAspects;

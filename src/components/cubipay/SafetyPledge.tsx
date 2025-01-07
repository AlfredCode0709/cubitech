import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import commonStyles from "../../styles/common.module.scss";

const SafetyPledge: React.FC<any> = () => {
  const safetyPledgeAvatars = [
    {
      alt: "Privacy First",
      src: "./cubipay/privacy_first.svg",
      title: "Privacy First",
      descr:
        "Identity verification keeps your account secure and your data private.",
    },
    {
      alt: "Fraud-Free",
      src: "./cubipay/fraud_free.svg",
      title: "Fraud-Free",
      descr:
        "24/7 monitoring blocks suspicious transactions. Contact us anytime.",
    },
    {
      alt: "Secure Access",
      src: "./cubipay/secure_access.svg",
      title: "Secure Access",
      descr:
        "Your funds are protected by your Cubi PIN, plus fingerprint or Face ID.",
    },
  ];

  return (
    <Box className={commonStyles.safetyPledge}>
      <Typography className={commonStyles.title}>
        CubiPay Safety Pledge
      </Typography>

      <Grid container className={commonStyles.gridContainer}>
        {safetyPledgeAvatars.map((avatar, index) => (
          <Grid item xs={4} className={commonStyles.gridItem} key={index}>
            <Avatar
              className={commonStyles.avatar}
              key={index}
              alt={avatar.alt}
              src={avatar.src}
              component={"div"}
              variant={"square"}
            />
            <Typography className={commonStyles.title}>
              {avatar.title}
            </Typography>
            <Typography className={commonStyles.description}>
              {avatar.descr}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SafetyPledge;

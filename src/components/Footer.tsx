import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <Box className={"footerContainer"}>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <Avatar
            className={"avatarLogo"}
            alt="Cubitech"
            src="./cubitech_brands/cubitech_dark.svg"
            variant="square"
          />
          <Typography className={"footer1Section"}>
            12 Marina Blvd, <br />
            Singapore 018982
          </Typography>
          <Typography className={"footer1_subSection"}>
            Stay connected with us <br />
            for latest updates!
          </Typography>
        </Grid>

        <Grid item xs={3} className={"footerSection"}>
          <Typography className={"footerLink"}>About Us</Typography>
          <Typography className={"footerLink"}>Help Centre</Typography>
        </Grid>

        <Grid item xs={3} className={"footerSection"}>
          <Typography className={"footerHeading"}>Consumers</Typography>
          {["CubiFood", "CubiMart", "CubiRide"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`}>
              <Typography className={"footerLink"}>{item}</Typography>
            </Link>
          ))}
        </Grid>

        <Grid item xs={3} className={"footerSection"}>
          <Typography className={"footerHeading"}>Quick Links</Typography>
          <Typography className={"footerLink"}>Developer Portal</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import LogoDark from "./navbar/LogoDark";

const Footer: React.FC = () => {
  return (
    <Box className={"footerContainer"}>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <LogoDark />
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
          <Link href={"/about"}>
            <Typography className={"footerLink"}>About Us</Typography>
          </Link>
          <Typography className={"footerLink"}>Help Centre</Typography>
        </Grid>

        <Grid item xs={3} className={"footerSection"}>
          <Typography className={"footerHeading"}>Consumers</Typography>
          {["CubiFood"].map((item) => (
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

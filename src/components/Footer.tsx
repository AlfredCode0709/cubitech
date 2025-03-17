import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import CubitechDark from "./CubitechDark";
import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";

const Footer: FC = () => {
  const router = useRouter();

  return (
    <Box
      className={"footerContainer"}
      sx={
        {
          "--background": `${
            router.pathname.startsWith("/cubifood")
              ? "#066039"
              : "var(--primary-dark)"
          }`,
        } as CSSProperties
      }
    >
      <Grid container spacing={4}>
        <Grid size={3}>
          <Link href={"/"}>
            <CubitechDark />
          </Link>
          <Typography className={"footer1Section"}>
            12 Marina Blvd, <br />
            Singapore 018982
          </Typography>
          <Typography className={"footer1_subSection"}>
            Stay connected with us <br />
            for latest updates!
          </Typography>
        </Grid>

        <Grid size={3} className={"footerSection"}>
          <Link href={"/about"}>
            <Typography className={"footerLink"}>About Us</Typography>
          </Link>
          <Typography className={"footerLink"}>Help Centre</Typography>
        </Grid>

        <Grid size={3} className={"footerSection"}>
          <Typography className={"footerHeading"}>Consumers</Typography>
          {["CubiFood", "CubiMart", "CubiRide", "CubiPay"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`}>
              <Typography className={"footerLink"}>{item}</Typography>
            </Link>
          ))}
        </Grid>

        <Grid size={3} className={"footerSection"}>
          <Typography className={"footerHeading"}>Quick Links</Typography>
          <Typography className={"footerLink"}>Developer Portal</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;

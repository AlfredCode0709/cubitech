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
          <FooterLink href={"/about"}>About Us</FooterLink>
          <FooterLink>Help Centre</FooterLink>
        </Grid>

        <Grid size={3} className={"footerSection"}>
          <Typography className={"footerHeading"}>Consumers</Typography>
          {[
            "CubiFood",
            "CubiMart",
            "CubiRide",
            "CubiPay",
            "CubiGift",
            "CubiPerk",
          ].map((item) => (
            <FooterLink key={item} href={`/${item.toLowerCase()}`}>
              {item}
            </FooterLink>
          ))}
        </Grid>

        <Grid size={3} className={"footerSection"}>
          <Typography className={"footerHeading"}>Quick Links</Typography>
          <FooterLink href={"/developer"}>Developer Portal</FooterLink>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;

const FooterLink: FC<{ href?: string; children: React.ReactNode }> = ({
  href,
  children,
}) => {
  return href ? (
    <Link href={href}>
      <Typography className="footerLink">{children}</Typography>
    </Link>
  ) : (
    <Typography className="footerLink inactive">{children}</Typography>
  );
};

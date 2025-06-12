import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { footerSections } from "@/config/footerLinks";
import { CSSProperties, FC, Fragment } from "react";

const MobileFooter: FC = () => {
  return (
    <Stack>
      <Box className={"mobileFooterIntroSection"}>
        <Link href={"/"}>
          <Typography className={"cubitechLogo"}>CUBITECH</Typography>
        </Link>

        <Typography className={"address"}>
          12 Marina Blvd, <br />
          Singapore 018982
        </Typography>

        <Typography className={"text"}>
          Stay connected with us <br />
          for latest updates!
        </Typography>
      </Box>

      {footerSections.map((section, idx) => (
        <Box
          className={`mobileFooterLinkSection`}
          key={section.title}
          sx={
            {
              "--borderBottom":
                idx !== footerSections.length - 1
                  ? "1px solid var(--white)"
                  : "none",
            } as CSSProperties
          }
        >
          <Typography className="title">{section.title}</Typography>
          {section.title === "Consumers" && (
            <Grid
              container
              justifyContent={
                section.links.length === 1 ? "center" : "flex-start"
              }
            >
              {section.links.map((link) => (
                <Grid size={6} key={link.label}>
                  <FooterLink key={link.label} href={link.href}>
                    {link.label}
                  </FooterLink>
                </Grid>
              ))}
            </Grid>
          )}
          {section.title !== "Consumers" && (
            <Fragment>
              {section.links.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </Fragment>
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default MobileFooter;

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

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { footerSections } from "@/config/footerLinks";
import { FC } from "react";

const DesktopFooter: FC = () => {
  return (
    <Grid container spacing={4}>
      <Grid size={3}>
        <Box className={"desktopFooterIntroSection"}>
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
      </Grid>

      {footerSections.map((section) => (
        <Grid size={3} key={section.title}>
          <Box className={`desktopFooterLinkSection`}>
            <Typography className="title">{section.title}</Typography>
            {section.links.map((link) => (
              <FooterLink key={link.label} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default DesktopFooter;

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

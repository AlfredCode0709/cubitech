import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { BrandConfig } from "@/config/brandConfig";
import { navItems } from "@/config/navItems";
import { CSSProperties, FC } from "react";

interface DesktopMainMenuProps {
  anchorEl: null | HTMLElement;
  handleClose: () => void;
  brand: BrandConfig;
}

const DesktopMainMenu: FC<DesktopMainMenuProps> = ({
  anchorEl,
  handleClose,
  brand,
}) => {
  const style: CSSProperties = {
    "--desktopMainMenuBgColor": brand.desktopMainMenuBgColor,
    "--desktopMainMenuColor": brand.desktopMainMenuColor,
    "--desktopMainMenuHoverBgColor": brand.desktopMainMenuHoverBgColor,
    "--desktopMainMenuHoverColor": brand.desktopMainMenuHoverColor,
  } as CSSProperties;

  return (
    <Menu
      className={"desktopMainMenu"}
      sx={style}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      disableScrollLock
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      {navItems.map((nav) => (
        <Link key={nav.label} href={nav.href} passHref>
          <MenuItem className={"menuItem"} onClick={handleClose}>
            <Avatar
              className={"avatar"}
              alt={nav.label}
              src={
                nav.avatars?.[
                  nav.label === "About Us" ? brand.avatarKey : "default"
                ]
              }
              variant={"square"}
            />
            <Typography>{nav.label}</Typography>
          </MenuItem>
        </Link>
      ))}
    </Menu>
  );
};

export default DesktopMainMenu;

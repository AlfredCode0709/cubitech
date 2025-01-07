import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const navItems = [
  {
    avatar: "./navbar_icons/aboutus_icon_light.svg",
    href: "/about",
    label: "About Us",
  },
  {
    avatar: "./navbar_icons/cubifood_icon.svg",
    href: "/cubifood",
    label: "CubiFood",
  },
  {
    avatar: "./navbar_icons/cubimart_icon.svg",
    href: "/cubimart",
    label: "CubiMart",
  },
  {
    avatar: "./navbar_icons/cubiride_icon.svg",
    href: "/cubiride",
    label: "CubiRide",
  },
  {
    avatar: "./navbar_icons/cubipay_icon.svg",
    href: "./cubipay",
    label: "CubiPay",
  },
  // {
  //   avatar: "./navbar_icons/cubigift_icon.svg",
  //   href: "#",
  //   label: "CubiGift",
  // },
  // {
  //   avatar: "./navbar_icons/cubiperk_icon.svg",
  //   href: "#",
  //   label: "CubiPerk",
  // },
];

interface NavArrayProps {
  handleClose: () => void;
}

const NavArray: React.FC<NavArrayProps> = ({ handleClose }) => {
  return (
    <>
      {navItems.map((nav) => (
        <Link key={nav.label} href={nav.href} passHref>
          <MenuItem className={"menuItem"} onClick={handleClose}>
            <Avatar
              className={"avatar"}
              alt={nav.label}
              src={nav.avatar}
              variant={"square"}
            />
            <Typography>{nav.label}</Typography>
          </MenuItem>
        </Link>
      ))}
    </>
  );
};

export default NavArray;

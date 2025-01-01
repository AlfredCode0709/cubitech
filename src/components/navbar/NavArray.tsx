import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

const navItems = [
  {
    avatar: "./navbar_icons/aboutus_icon_light.svg",
    href: "#",
    label: "About Us",
  },
  {
    avatar: "./navbar_icons/cubifood_icon.svg",
    href: "#",
    label: "CubiFood",
  },
  {
    avatar: "./navbar_icons/cubimart_icon.svg",
    href: "#",
    label: "CubiMart",
  },
  {
    avatar: "./navbar_icons/cubiride_icon.svg",
    href: "#",
    label: "CubiRide",
  },
  {
    avatar: "./navbar_icons/cubipay_icon.svg",
    href: "#",
    label: "CubiPay",
  },
  {
    avatar: "./navbar_icons/cubigift_icon.svg",
    href: "#",
    label: "CubiGift",
  },
  {
    avatar: "./navbar_icons/cubiperk_icon.svg",
    href: "#",
    label: "CubiPerk",
  },
];

interface NavArrayProps {
  handleClose: () => void;
}

const NavArray: React.FC<NavArrayProps> = ({ handleClose }) => {
  return (
    <>
      {navItems.map((nav) => (
        <MenuItem className={'menuItem'} key={nav.label} onClick={handleClose} href={nav.href}>
          <Avatar className={'avatar'} alt={nav.label} src={nav.avatar} variant={"square"} />
          <Typography>{nav.label}</Typography>
        </MenuItem>
      ))}
    </>
  );
};

export default NavArray;

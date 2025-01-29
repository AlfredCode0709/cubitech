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
];

interface MainNavArrayProps {
  handleClose: () => void;
}

const MainNavArray: React.FC<MainNavArrayProps> = ({ handleClose }) => {
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

export default MainNavArray;

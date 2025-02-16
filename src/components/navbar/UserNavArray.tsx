import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "next/link";
import { FC } from "react";

const navItems = [
  {
    icon: <AccountBoxIcon className={"icon"} />,
    href: "#",
    label: "Account",
  },
  {
    icon: <LogoutIcon className={"icon"} />,
    href: "/auth/logout",
    label: "Logout",
  },
];

interface UserNavArrayProps {
  handleClose: () => void;
}

const UserNavArray: FC<UserNavArrayProps> = ({ handleClose }) => {
  return (
    <>
      {navItems.map((nav) => (
        <Link key={nav.label} href={nav.href} passHref>
          <MenuItem className={"menuItem"} onClick={handleClose}>
            {nav.icon}
            <Typography>{nav.label}</Typography>
          </MenuItem>
        </Link>
      ))}
    </>
  );
};

export default UserNavArray;

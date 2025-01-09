import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import AccountBox from "@mui/icons-material/AccountBox";
import Logout from "@mui/icons-material/Logout";
import Link from "next/link";

const navItems = [
  {
    icon: <AccountBox className={"icon"} />,
    href: "#",
    label: "Account",
  },
  {
    icon: <Logout className={"icon"} />,
    href: "/api/auth/logout",
    label: "Logout",
  },
];

interface UserNavArrayProps {
  handleClose: () => void;
}

const UserNavArray: React.FC<UserNavArrayProps> = ({ handleClose }) => {
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

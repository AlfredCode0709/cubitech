import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { FC } from "react";
import { userNavItems } from "./userNavItems";

interface UserNavArrayProps {
  handleClose: () => void;
}

const UserNavArray: FC<UserNavArrayProps> = ({ handleClose }) => {
  return (
    <>
      {userNavItems.map((nav) => (
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

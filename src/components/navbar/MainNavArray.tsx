import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { mainNavItems } from "./mainNavItems";
import { FC } from "react";

interface MainNavArrayProps {
  handleClose: () => void;
}

const MainNavArray: FC<MainNavArrayProps> = ({ handleClose }) => {
  return (
    <>
      {mainNavItems.map((nav) => (
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

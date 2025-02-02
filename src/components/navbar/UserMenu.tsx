import Menu from "@mui/material/Menu";
import UserNavArray from "./UserNavArray";
import { FC } from "react";

interface UserMenuProps {
  anchorEl: null | HTMLElement;
  handleClose: () => void;
}

const UserMenu: FC<UserMenuProps> = ({ anchorEl, handleClose }) => {
  return (
    <Menu
      className={"userMenu"}
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
      <UserNavArray handleClose={handleClose} />
    </Menu>
  );
};

export default UserMenu;

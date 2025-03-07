import Menu from "@mui/material/Menu";
import MainNavArray from "./MainNavArray";
import { FC } from "react";

interface MainMenuProps {
  anchorEl: null | HTMLElement;
  handleClose: () => void;
}

const MainMenu: FC<MainMenuProps> = ({ anchorEl, handleClose }) => {
  return (
    <Menu
      className={"mainMenu"}
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
      <MainNavArray handleClose={handleClose} />
    </Menu>
  );
};

export default MainMenu;

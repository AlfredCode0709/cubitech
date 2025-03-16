import Menu from "@mui/material/Menu";
import MainNavArray from "./MainNavArray";
import { CSSProperties, FC } from "react";

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
      sx={
        {
          "--width": "150px",
          "--background-color": "var(--primary-light)",
          "--color": "var(--primary-main)",
          "--hover-background-color": "#b7d1fa",
          "--hover-color": "var(--primary-dark)",
        } as CSSProperties
      }
    >
      <MainNavArray handleClose={handleClose} />
    </Menu>
  );
};

export default MainMenu;
